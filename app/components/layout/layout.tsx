import AnimatedBackground from '@/app/components/background/background'
import Nav from '@/app/components/layout/nav'
import SideBar from '@/app/components/layout/sidebar'
import React from 'react'
import dynamic from 'next/dynamic'

const PersonalInfo = dynamic(
  () => import('@/app/components/layout/personal.info'),
)

const MobileHeader = dynamic(
  () => import('@/app/components/layout/mobile.header'),
)

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='dark min-h-screen bg-background  mx-auto  text-secondary relative max-w-[2000px]'>
      <div className='max-w-screen-4xl flex flex-col-reverse mx-auto pl-5 xl:pl-20'>
        <div className='grid grid-cols-1 xl:grid-cols-3 h-full w-full relative'>
          <div className='w-full h-full flex justify-start items-center h-xl:items-start h-xl:pt-24 pl-12'>
            <PersonalInfo />
          </div>
          <div
            id='content-scroll'
            className='col-span-2 md:overflow-y-scroll md:max-h-screen pb-24  pr-5 xl:pr-20'
          >
            {children}
          </div>
        </div>
        <MobileHeader />
        <Nav />
        <SideBar />
      </div>
      <AnimatedBackground />
    </main>
  )
}
