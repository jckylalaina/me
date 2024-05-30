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
    <main className='dark min-h-screen bg-background md:max-w-screen-2xl mx-auto px-5 text-secondary relative flex flex-col-reverse'>
      <div className='grid grid-cols-1 md:grid-cols-3 h-full w-full relative'>
        <div className='w-full h-full flex justify-start items-center pl-12'>
          <PersonalInfo />
        </div>
        <div
          id='content-scroll'
          className='col-span-2 md:overflow-y-scroll md:max-h-screen pb-24'
        >
          {children}
        </div>
      </div>
      <MobileHeader />
      <Nav />
      <SideBar />
      <AnimatedBackground />
    </main>
  )
}
