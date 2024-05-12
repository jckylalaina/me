import React from 'react'
import Title from '@/app/components/titlte'
import ExperienceGroupsButton from '@/app/components/feat-intro/expercience.group'
import AnimatedText from '@/app/components/animated.text'
export default function Intro() {
  return (
    <>
      <div className='md:min-h-96 mt-14 md:mt-0'>
        <Title
          as={`h1`}
          className='text-5xl md:text-big text-white leading-tight'
        >
          Hey there, {`I'm`} <span>Jacky</span>, Your Web Wizard & Code Crafter
        </Title>
        <AnimatedText
          className='mt-10 px-2'
          text={`Let's Build Something Amazing Together!`}
        />
      </div>
      <ExperienceGroupsButton />
    </>
  )
}
