import React from 'react'
import { DefaultAvatar } from './DefaultAvatar'

export const Avatar = ({ avatarSrc }: { avatarSrc: string }): JSX.Element => {
  return (
    <div className="w-full h-full rounded-full text-2xl md:text-4xl text-center xs:w-10 xs:h-10">
      {avatarSrc !== '' ? (
        <figure
          className={
            'flex justify-center items-center rounded-full text-white w-6 h-6 text-sm relative xs:w-full xs:h-full xs:text-xl'
          }
        >
          <img
            src={avatarSrc}
            alt="Bot avatar"
            className="rounded-full object-cover w-full h-full"
          />
        </figure>
      ) : (
        <DefaultAvatar />
      )}
    </div>
  )
}