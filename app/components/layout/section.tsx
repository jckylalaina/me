import { Button } from '@nextui-org/react'
import React from 'react'
type SectionProps = {
  title?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}
//eslint-disable-next-line
const Section = React.forwardRef((props: SectionProps, ref: any) => {
  return (
    <section
      ref={ref}
      className='item-section px-5 md:pt-24  md:pr-24'
      id={props.title}
    >
      <div className='flex flex-row w-full mb-12'>
        <Button
          startContent={props?.icon}
          size={'md'}
          variant='faded'
          className='bg-transparent border border-secondary text-white pointer-events-none uppercase'
        >
          {props.title}
        </Button>
      </div>
      {props.children}
    </section>
  )
})
Section.displayName = 'Section'
export default Section
