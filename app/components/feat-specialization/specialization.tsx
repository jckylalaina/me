import { EaseOnScroll } from '@/app/components/animation/entrance.animation'
import Section from '@/app/components/layout/section'
import Title from '@/app/components/titlte'
import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import { FaCode, FaSpider, FaWordpress } from 'react-icons/fa6'
import { SiOdoo } from 'react-icons/si'
import { TbSubtask } from 'react-icons/tb'
type Specialization = {
  name: string
  description: string
  icon: React.ReactNode
}
export default function Specialization() {
  const specialization: Specialization[] = [
    {
      name: 'Web App Development',
      description:
        'With expertise in crafting dynamic and user-centric web applications, I bring creativity and functionality together to deliver seamless digital experiences.',
      icon: <FaCode size='2.5rem' className='text-success' />,
    },
    {
      name: 'Odoo',
      description:
        'Leveraging the power of Odoo, I specialize in integrating and customizing this versatile ERP solution to streamline business processes and enhance productivity.',
      icon: <SiOdoo size='2.5rem' className='text-success' />,
    },
    {
      name: 'WordPress Integration',
      description:
        'As a WordPress aficionado, I excel in integrating and customizing WordPress websites, empowering businesses with scalable and feature-rich online platforms.',
      icon: <FaWordpress size='2.5rem' className='text-success' />,
    },
    {
      name: 'Web Scraping',
      description:
        'Harnessing the potential of web scraping technologies, I adeptly gather and analyze data from diverse sources to provide valuable insights and drive informed decision-making.',
      icon: <FaSpider size='2.5rem' className='text-success' />,
    },
  ]

  return (
    <EaseOnScroll
      animationFrom={{ y: 100 }}
      animationTo={{ y: 0 }}
      duration={0.5}
    >
      <Section title='SERVICES' icon={<TbSubtask />}>
        <Title as='h2' className='text-5xl leading-tight text-white'>
          My <span>Specializations</span>
        </Title>
        <div className='mt-8 flex flex-col gap-5'>
          {specialization.map(
            (specialization: Specialization, index: number) => (
              <Card
                className=' py-4 p-4 bg-opacity-30 bg-transparent md:bg-primary  md:border-default md:border'
                radius='lg'
                key={`specialization-${index}`}
                isHoverable={false}
                shadow={'md'}
              >
                <CardBody className='pb-0 pt-2 px-4 flex-row items-start justify-between mb-8 relative'>
                  <div className='w-10/12'>
                    <h5 className='text-xl'>{specialization.name}</h5>
                    <p className='text-secondary mt-2'>
                      {specialization.description}
                    </p>
                  </div>
                  {specialization.icon}
                </CardBody>
              </Card>
            ),
          )}
        </div>
      </Section>
    </EaseOnScroll>
  )
}
