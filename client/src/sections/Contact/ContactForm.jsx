import React from 'react'

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
  // No backend yet: this only stops the page from reloading.
  const handleSubmit = (event) => event.preventDefault()

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 rounded-3xl border border-white/18 bg-white/4 p-10 backdrop-blur-[1rem] max-md:p-6"
    >
      <Field id="name" label="Your full name" type="text" placeholder="Jane Smith" autoComplete="name" />
      <Field id="email" label="Email address" type="email" placeholder="jane@company.com" autoComplete="email" />
      <Field id="subject" label="Subject" type="text" placeholder="What would you like to work on?" />
      <Field
        id="message"
        label="Your message"
        textarea
        rows={5}
        placeholder="Share a few details about your idea, timeline, or goals..."
      />

      <button
        type="submit"
        className="group mt-2 flex w-full cursor-pointer items-center justify-between rounded-[3rem] border border-snow bg-snow px-[1.2rem] py-4 font-mono text-[0.62rem] tracking-[0.08em] text-ink uppercase transition-[color,background-color,translate] duration-250 hover:-translate-y-[0.15rem] hover:bg-transparent hover:text-snow focus-visible:outline-2 focus-visible:outline-offset-[0.25rem] focus-visible:outline-sun"
      >
        <span>Send message</span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="transition-transform duration-250 group-hover:translate-x-[0.2rem] group-hover:-translate-y-[0.2rem]"
        >
          <path d="M5 19 19 5M9 5h10v10" />
        </svg>
      </button>
    </form>
  )
}

export default ContactForm