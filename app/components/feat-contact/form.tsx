'use client'
import schema from '@/app/components/feat-contact/form.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaDollarSign, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6'
import { MdTask } from 'react-icons/md'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const submitForm = (data: any) => {
    console.log(data)
  }

  return (
    <form
      id='contact-form'
      onSubmit={handleSubmit(submitForm)}
      className='mt-8'
    >
      <div className='flex flex-row gap-y-14 flex-wrap'>
        <Input
          type='text'
          {...register('fullName')}
          placeholder='Your Full Name'
          className='w-full lg:w-1/2'
          variant='underlined'
          startContent={<FaUser size={'1.5rem'} />}
          isInvalid={errors.fullName && true}
          errorMessage={errors.fullName && errors.fullName.message}
        />
        <Input
          type='text'
          {...register('email')}
          placeholder='Your Email Address'
          className='w-full md:w-1/2 md:px-5'
          variant='underlined'
          startContent={<FaEnvelope size={'1.5rem'} />}
          isInvalid={errors.email && true}
          errorMessage={errors.email && errors.email.message}
        />
        <Input
          type='text'
          {...register('phone')}
          placeholder='Your Nhone Number'
          className='w-full md:w-1/2'
          variant='underlined'
          startContent={<FaPhone size={'1.5rem'} />}
          isInvalid={errors.phone && true}
          errorMessage={errors.phone && errors.phone.message}
        />
        <Input
          type='text'
          {...register('subject')}
          placeholder='Subject'
          className='w-full md:w-1/2 md:px-5'
          variant='underlined'
          startContent={<MdTask size={'1.5rem'} />}
          isInvalid={errors.subject && true}
          errorMessage={errors.subject && errors.subject.message}
        />
        <Input
          type='number'
          {...register('budget')}
          placeholder='Your budget'
          className='w-full'
          variant='underlined'
          startContent={<FaDollarSign size={'1.5rem'} />}
          isInvalid={errors.budget && true}
          errorMessage={errors.budget && errors.budget.message}
        />
        <Textarea
          variant='underlined'
          labelPlacement='outside'
          placeholder='Your Message'
          {...register('message')}
        />
      </div>
      <Button
        radius='full'
        color='success'
        isDisabled
        className='uppercase w-full mt-14'
        aria-label='submit'
      >
        SEND MESSAGE
      </Button>
    </form>
  )
}
