import { google } from 'googleapis'
import MailComposer from 'nodemailer/lib/mail-composer/index.js'

const esc = (text) =>
  text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export const sendContactMail = async ({ name, email, subject, message }) => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, MAIL_NOTIFY_USER, MAIL_NOTIFY_REFRESH, MAIL_TO } = process.env

  const auth = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)
  auth.setCredentials({ refresh_token: MAIL_NOTIFY_REFRESH })
  const gmail = google.gmail({ version: 'v1', auth })

  const raw = await new MailComposer({
    from: { name: 'Portfolio contact', address: MAIL_NOTIFY_USER },
    to: MAIL_TO,
    replyTo: { name, address: email },
    subject: `New message: ${subject}`,
    text: `${name} <${email}> wrote to you.\n\nSubject: ${subject}\n\n${message}`,
    html: `<p><b>${esc(name)}</b> (${esc(email)}) wrote to you.</p>
           <p><b>Subject:</b> ${esc(subject)}</p>
           <p style="white-space:pre-wrap"> <b>Text:</b> ${esc(message)}</p>`,
  })
    .compile()
    .build()

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: raw.toString('base64url') },
  })
}