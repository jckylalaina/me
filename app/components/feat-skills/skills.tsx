import { EaseInLeft } from '@/app/components/animation/entrance.animation'
import SkillsItems from '@/app/components/feat-skills/skills.items'
import Section from '@/app/components/layout/section'
import Title from '@/app/components/titlte'
import React from 'react'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'

export default function Skills() {
  return (
    <EaseInLeft>
      <Section title='Stack' icon={<HiOutlineWrenchScrewdriver />}>
        <Title as='h2' className='text-5xl leading-tight text-white'>
          My <span>Stack</span>
        </Title>
        <SkillsItems />
      </Section>
    </EaseInLeft>
  )
}
