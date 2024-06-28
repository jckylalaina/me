import Timeline from '@/app/components/timeline/timeline'
import Title from '@/app/components/titlte'
import Lottie from 'lottie-react'
import React from 'react'
import animationData from './animation.json'
export default function Resume() {
  const resumes = [
    {
      start: '2024',
      end: 'present',
      poste: 'Frontend Developer',
      enterprise: 'Resume example',
      enterpriseURL: 'https://resumedone.co/',
    },
    {
      start:"2024",
      end:"present",
      poste: "Full-stack Developer",
      enterprise: "Editions Pôle",
      enterpriseURL: 'https://www.librairie-infinimath.com'
    },
    {
      start: '2023',
      end: 'present',
      poste: 'Lead Developer',
      enterprise: 'Eufonie',
      enterpriseURL: 'https://www.eufonie.fr',
    },
    {
      start: '2019',
      end: 'present',
      poste: 'Full-stack Developer',
      enterprise: 'Freelance',
    },
    {
      start: '2019',
      end: '2023',
      poste: 'Web Developer',
      enterprise: 'Eufonie',
      enterpriseURL: 'https://www.eufonie.fr',
    },
  ]
  return (
    <>
      <Title as='h2' className='text-3xl md:text-5xl leading-tight text-white'>
        Experience
      </Title>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Timeline timelines={resumes} />
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ maxWidth: '450px' }}
        />
      </div>
    </>
  )
}
