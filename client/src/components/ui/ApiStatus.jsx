import React from 'react'

// Shows "Loading…", an error, or "nothing yet" while a section waits for the server.
const ApiStatus = ({ loading, error, empty }) => {
  if (!loading && !error && !empty) return null

  const text = loading
    ? 'Loading…'
    : error
      ? 'Could not load this section. Is the server running?'
      : 'Nothing here yet.'

  return (
    <p className="m-0 font-mono text-[0.72rem] tracking-[0.08em] text-[#4a2418] uppercase">
      {text}
    </p>
  )
}

export default ApiStatus