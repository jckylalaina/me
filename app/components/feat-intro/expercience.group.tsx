import Counter from '@/app/components/counter'
import React from 'react'
type Group = {
  count: number
  name: string
}
export default function ExperienceGroupsButton() {
  const exps: Group[] = [
    {
      count: 6,
      name: 'years of experience',
    },
    {
      count: 100,
      name: 'PROJECTS COMPLETED',
    },
  ]
  return (
    <div className='flex flex-row gap-8'>
      {exps.map((exp: Group, index: number) => {
        return (
          <div key={`experience-group-item-${index}`} className='max-w-32'>
            <Counter
              from={0}
              to={exp.count}
              className='text-big text-success'
            />
            <p className='uppercase text-lg'>{exp.name}</p>
          </div>
        )
      })}
    </div>
  )
}
