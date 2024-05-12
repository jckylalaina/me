import About from '@/app/components/feat-about/about'
import Contact from '@/app/components/feat-contact/contact'
import Intro from '@/app/components/feat-intro/intro'
import Resume from '@/app/components/feat-resume/resume'
import Skills from '@/app/components/feat-skills/skills'
import Specialization from '@/app/components/feat-specialization/specialization'
import React from 'react'
export default function Home() {
  return (
    <div className='flex gap-24 flex-col'>
      <Intro />
      <About />
      <Resume />
      <Specialization />
      <Skills />
      <Contact />
    </div>
  )
}
