import Form from '@/app/components/feat-contact/form'
import Title from '@/app/components/titlte'
import React from 'react'

export default function Contact() {
  return (
    <>
      <Title as='h2' className='text-5xl leading-tight text-white mb-8'>
        Let‘s Work <span>Together</span>
      </Title>
      <Form />
    </>
  )
}
