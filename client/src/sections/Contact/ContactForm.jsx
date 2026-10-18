import React, { useState } from 'react'
import { sendContact } from '../../utils/sendContact'

const fieldBase =
  'w-full rounded-none border-b border-white/28 bg-transparent pt-[0.35rem] pb-[0.9rem] font-sans text-base leading-normal font-light text-snow outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[rgb(255_250_243/42%)] focus:border-sun focus:shadow-[0_1px_0_var(--sun)]'

// One label + one input (or textarea)
const Field = ({ id, label, textarea = false, ...props }) => {
  const Control = textarea ? 'textarea' : 'input'

  return (
    <div className="grid gap-[0.7rem]">
      <label
        htmlFor={id}
        className="font-mono text-[0.58rem] tracking-[0.09em] text-[#e5c4b1] uppercase"
      >
        {label}
      </label>
      <Control
        id={id}
        name={id}
        required
        className={textarea ? `${fieldBase} min-h-32 resize-y` : fieldBase}
        {...props}
      />
    </div>
  )
}

const ContactForm = () => {
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('sending')
    setErrorMessage('')

    try {
      await sendContact({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        website: formData.get('website'), // hidden bot trap, stays empty for real visitors
      })
      form.reset()
      setStatus('success')
    } catch (error) {
      setErrorMessage(error.message || 'Could not send your message.')
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 rounded-3xl border border-white/18 bg-white/4 p-10 backdrop-blur-[1rem] max-md:p-6"
    >
      <Field id="name" label="Your full name" type="text" placeholder="Jane Smith" autoComplete="name" maxLength={100} />
      <Field id="email" label="Email address" type="email" placeholder="jane@company.com" autoComplete="email" maxLength={200} />
      <Field id="subject" label="Subject" type="text" placeholder="What would you like to work on?" maxLength={150} />
      <Field
        id="message"
        label="Your message"
        textarea
        rows={5}
        maxLength={5000}
        placeholder="Share a few details about your idea, timeline, or goals..."
      />

      {/* Honeypot: invisible to people, bots fill it in. Must stay empty. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="group mt-2 flex w-full cursor-pointer items-center justify-between rounded-[3rem] border border-snow bg-snow px-[1.2rem] py-4 font-mono text-[0.62rem] tracking-[0.08em] text-ink uppercase transition-[color,background-color,translate] duration-250 hover:-translate-y-[0.15rem] hover:bg-transparent hover:text-snow focus-visible:outline-2 focus-visible:outline-offset-[0.25rem] focus-visible:outline-sun disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        <span>{sending ? 'Sending...' : 'Send message'}</span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="transition-transform duration-250 group-hover:translate-x-[0.2rem] group-hover:-translate-y-[0.2rem]"
        >
          <path d="M5 19 19 5M9 5h10v10" />
        </svg>
      </button>

      <div aria-live="polite" className="-mt-2 min-h-5 text-[0.85rem] leading-relaxed">
        {status === 'success' && (
          <p className="m-0 text-[#e5c4b1]">
            Thank you! Your message was sent. I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="m-0 text-[#ffb4a2]">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm