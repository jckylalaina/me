import { EaseOnScroll } from '@/app/components/animation/entrance.animation'
import Section from '@/app/components/layout/section'
import { Bold } from '@/app/components/text.style'
import Title from '@/app/components/titlte'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
export default function About() {
  return (
    <EaseOnScroll
      animationFrom={{ y: 100 }}
      animationTo={{ y: 0 }}
      duration={0.5}
    >
      <Section title='ABOUT' icon={<AiOutlineUser />}>
        <Title as='h2' className='text-5xl leading-tight text-white'>
          Jacky in Bytes: Crafting <span>Digital Masterpieces</span>
        </Title>
        <div className='leading-normal mt-8 flex flex-col gap-3'>
          <p>
            {' '}
            As a seasoned <Bold text='lead developer' />, I‘m Jacky, a
            <Bold text='self-taught' /> web enthusiast who embarked on this
            thrilling journey back in <Bold text='2018' />. From the trenches of
            <Bold text='enterprise projects' /> to the freedom of{' '}
            <Bold text='freelance' />
            gigs, my passion for crafting exceptional digital experiences knows
            no bounds.{' '}
          </p>
          <p>
            {' '}
            Driven by the desire to deliver excellence, I thrive on the
            challenge of creating solutions that exceed my clients‘
            expectations. With a strong foundation in{' '}
            <Bold text='database architecture' /> and a keen eye for{' '}
            <Bold
              text='modern
            frontend'
            />{' '}
            technologies like <Bold text='Next.js' />, coupled with server
            expertise on platforms like <Bold text='AWS' />, I sculpt digital
            landscapes that resonate with both form and function. Embracing the
            elegance of <Bold text='Tailwind CSS' />, I weave aesthetic finesse
            into every project I touch.{' '}
          </p>
          <p>
            What sets me apart? My insatiable <Bold text='curiosity' />. Always
            hungry for knowledge, I‘m on a perpetual quest to outdo myself,
            constantly honing my skills and exploring new horizons. Because for
            me, every line of code is an opportunity to innovate, to evolve, and
            to elevate the digital realm.{' '}
          </p>
          <p>
            Join me on this journey as we turn dreams into pixels, one line of
            code at a time.
          </p>
        </div>
      </Section>
    </EaseOnScroll>
  )
}
