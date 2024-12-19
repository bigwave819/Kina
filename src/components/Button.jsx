import clsx from 'clsx'
import React from 'react'

const Button = ({ id, title, leftIcon, containerClass }) => {
  return (
    <div>
      <button id={id} className={clsx`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 py-3 px-7 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
      </button>
    </div>
  )
}

export default Button
