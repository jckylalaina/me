import Form from '@/app/components/feat-contact/form'
import Section from '@/app/components/layout/section'
import Title from '@/app/components/titlte'
import React from 'react'
import { FaDollarSign } from 'react-icons/fa6'

export default function Contact() {
  return (
    <Section title='Contact' icon={<FaDollarSign />}>
      <Title as='h2' className='text-5xl leading-tight text-white mb-8'>
        Let‘s Work <span>Together</span>
      </Title>
      <Form />
    </Section>
  )
}
