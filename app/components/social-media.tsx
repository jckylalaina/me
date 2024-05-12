import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai'
export type Social = {
  name: string
  url: string
  icon: React.ReactNode
}
export default function SocialsMedia() {
  const socials: Social[] = [
    {
      name: 'Github',
      icon: <AiOutlineGithub />,
      url: 'https://github.com/jckylalaina',
    },
    {
      name: 'LinkedIn',
      icon: <AiOutlineLinkedin />,
      url: 'https://www.linkedin.com/in/jcky-randrianarivony/',
    },
    {
      name: 'Mail',
      icon: <AiOutlineMail />,
      url: 'mailto:radolalainajacky@gmail.com',
    },
    {
      name: 'Phone',
      icon: <AiOutlinePhone />,
      url: 'tel:+261341385006',
    },
  ]
  return (
    <div className='flex flex-row gap-5'>
      {socials.map((social: Social, index: number) => {
        return (
          <Button
            key={index}
            radius='full'
            isIconOnly
            as={Link}
            color='success'
            href={social.url}
            className='text-success hover:text-black hover:bg-success'
            variant='bordered'
            aria-label='Like'
          >
            {social.icon}
          </Button>
        )
      })}
    </div>
  )
}
