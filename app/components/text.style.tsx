import React from 'react'
export const Bold = ({ text }: { text: string }) => {
  return <span className='text-success font-bold'>{` ${text} `}</span>
}
