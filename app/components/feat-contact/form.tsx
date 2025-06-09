'use client'
import schema, { FormValue } from '@/app/components/feat-contact/form.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaUser } from 'react-icons/fa6'
import { MdTask } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [loading, setLoading] = useState(false)

  const submitForm = (data: FormValue) => {
    if (loading == true) return false
    setLoading(true)
    fetch('/en/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(responseData => {
        if (responseData?.message) {
          toast.success(responseData.message)
          reset()
        } else {
          toast.error('Message not found in response')
        }
        setLoading(false)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
        setLoading(false)
        toast.error('Failed to send mail')
      })
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
          {...register('subject')}
          placeholder='Subject'
          className='w-full'
          variant='underlined'
          startContent={<MdTask size={'1.5rem'} />}
          isInvalid={errors.subject && true}
          errorMessage={errors.subject && errors.subject.message}
        />
        {/* <Input
          type='text'
          {...register('budget')}
          placeholder='Your budget'
          className='w-full'
          variant='underlined'
          startContent={<FaDollarSign size={'1.5rem'} />}
          isInvalid={errors.budget && true}
          errorMessage={errors.budget && errors.budget.message}
        /> */}
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
        className={`uppercase w-full  mt-14 ${loading ? 'cursor-wait' : ''}`}
        aria-label='submit'
        type='submit'
      >
        SEND MESSAGE
      </Button>
      <ToastContainer />
    </form>
  )
}
