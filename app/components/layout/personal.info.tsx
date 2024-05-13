'use client'
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Snippet,
  Image,
} from '@nextui-org/react'
import Logo from '@/app/components/assets/logo'
import SocialsMedia from '@/app/components/social-media'
import { AiOutlineMail } from 'react-icons/ai'
import { useMedia } from 'react-use'
import { EaseInLeft } from '@/app/components/animation/entrance.animation'

export default function PersonalInfo() {
  const isMobile = useMedia('(max-width: 768px)', false)
  return (
    <EaseInLeft>
      <Card
        className=' py-4 w-[350px] h-[665px] p-4 bg-opacity-30 bg-transparent md:bg-primary  md:border-default md:border hidden md:flex'
        radius='lg'
        isHoverable={false}
        shadow={(isMobile && 'none') || 'md'}
      >
        <CardHeader className='pb-0 pt-2 px-4 flex-row items-start justify-between mb-4'>
          <Logo />
          <p className='text-end'>
            {`</> `}Web
            <br />
            developer
          </p>
        </CardHeader>
        <CardBody className='overflow-visible py-4 justify-start flex items-center gap-8'>
          <div className='min-h-48'>
            <Image
              alt='Card background'
              className='object-cover rounded-xl'
              src='/jacky.jpg'
              width={200}
            />
          </div>
          <div>
            <Snippet>radolalainajacky@gmail.com</Snippet>
            <p className='text-xl text-center leading-relaxed mt-2'>
              Base in Antananarivo, Mga
            </p>
          </div>
          <small className='text-secondary'>
            © {new Date().getFullYear()} Jacky. All Rights Reserved
          </small>
          <SocialsMedia size='md' />
          <Button
            radius='full'
            color='success'
            className='uppercase w-full'
            aria-label='Like'
            startContent={<AiOutlineMail />}
          >
            Hire me!
          </Button>
        </CardBody>
      </Card>
    </EaseInLeft>
  )
}
