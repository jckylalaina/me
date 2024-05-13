import React from 'react'
import ProjectIcon from '@/app/components/feat-intro/project.icon'
import Title from '@/app/components/titlte'
import ExperienceGroupsButton from '@/app/components/feat-intro/expercience.group'
import AnimatedText from '@/app/components/animated.text'
export default function Intro() {
  return (
    <>
      <div className='h-96'>
        <Title as={`h1`} className='text-big text-white leading-tight'>
          Hey there, {`I'm`} <span>Jacky</span>, Your Web Wizard & Code Crafter
        </Title>
        <AnimatedText
          className='mt-10 px-2'
          text={`Let's Build Something Amazing Together!`}
        />
      </div>
      <div className='flex flex-row justify-end px-24 mt-14'>
        <ProjectIcon />
      </div>
      <ExperienceGroupsButton />
    </>
  )
}
