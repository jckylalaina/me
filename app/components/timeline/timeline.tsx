import Title from '@/app/components/titlte'
import React from 'react'
type TimelineProps = {
  start: string
  end?: string
  poste: string
  enterprise?: string
  enterpriseURL?: string
}
export default function Timeline({
  timelines,
}: {
  timelines?: TimelineProps[]
}) {
  return (
    <div className='-my-6'>
      {timelines?.map((timeline: TimelineProps, index: number) => (
        <div key={index} className='relative pl-8 sm:pl-14 py-6 group'>
          <div className='flex flex-col sm:flex-row items-start mb-1 cursor-pointer group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[150%] before:px-px before:bg-secondary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-secondary  after:box-content  after:rounded-full sm:after:ml-[1.(rem] after:-translate-x-1/2 after:translate-y-2'>
            <div className='text-lg font-bold text-secondary cursor-pointer'>
              {`${timeline.start} - ${timeline.end}`}
            </div>
          </div>
          <Title as='h4' className='text-2xl text-white'>
            {timeline.poste}
          </Title>
          <small>{timeline.enterprise}</small>
        </div>
      ))}
    </div>
  )
}
