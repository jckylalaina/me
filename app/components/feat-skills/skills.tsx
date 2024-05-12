import SkillsItems from '@/app/components/feat-skills/skills.items'
import Title from '@/app/components/titlte'
import React from 'react'

export default function Skills() {
  return (
    <>
      <Title as='h2' className='text-3xl md:text-5xl leading-tight text-white'>
        My <span>Stack</span>
      </Title>
      <SkillsItems />
    </>
  )
}
