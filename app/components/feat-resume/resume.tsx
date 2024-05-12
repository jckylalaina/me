import Timeline from '@/app/components/timeline/timeline'
import Title from '@/app/components/titlte'
import React from 'react'
export default function Resume() {
  const resumes = [
    {
      start: '2024',
      end: 'present',
      poste: 'Frontend Developer',
      enterprise: 'Resume example',
      enterpriseURL: '',
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
      <div className='mt-8'>
        <Timeline timelines={resumes} />
      </div>
    </>
  )
}
