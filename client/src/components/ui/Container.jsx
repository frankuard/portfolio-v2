import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={twMerge(
        'mx-auto w-[min(86rem,calc(100%-7rem))] max-md:w-[calc(100%_-_2.5rem)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Container