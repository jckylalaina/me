import React from 'react'
import { BiLogoPhp } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa6'
import { IoLogoWordpress } from 'react-icons/io5'
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from 'react-icons/ri'
import { SiOdoo, SiTypescript } from 'react-icons/si'

type Skills = {
  name: string
  url: string
  icon: React.ReactNode
}
export default function SkillsItems() {
  const skills: Skills[] = [
    {
      name: 'NEXT.js',
      icon: <RiNextjsFill size={'5rem'} />,
      url: 'https://nextjs.org/',
    },
    {
      name: 'Worpress',
      icon: <IoLogoWordpress size={'5rem'} />,
      url: 'https://wordpress.org/',
    },
    {
      name: 'Odoo',
      icon: <SiOdoo size={'5rem'} />,
      url: 'https://www.odoo.com/',
    },
    {
      name: 'Python',
      icon: <FaPython size={'5rem'} />,
      url: 'https://www.python.org/',
    },
    {
      name: 'Typescript',
      icon: <SiTypescript size={'5rem'} />,
      url: 'https://www.python.org/',
    },
    {
      name: 'Javascript',
      icon: <RiJavascriptFill size={'5rem'} />,
      url: 'https://www.python.org/',
    },
    {
      name: 'PHP',
      icon: <BiLogoPhp size={'5rem'} />,
      url: 'https://www.python.org/',
    },
    {
      name: 'TailwindCss',
      icon: <RiTailwindCssFill size={'5rem'} />,
      url: 'https://www.python.org/',
    },
  ]
  return (
    <div className='flex flex-row w-full flex-wrap mt-8 gap-24'>
      {skills.map((skillsItem: Skills, index: number) => (
        <div className='w-100 h-100  p-5 rounded-xl' key={index}>
          {skillsItem.icon}
        </div>
      ))}
    </div>
  )
}
