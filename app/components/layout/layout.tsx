import AnimatedBackground from '@/app/components/background/background'
import MobileHeader from '@/app/components/layout/mobile.header'
import Nav from '@/app/components/layout/nav'
import PersonalInfo from '@/app/components/layout/personal.info'
import SideBar from '@/app/components/layout/sidebar'
import React from 'react'
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='dark min-h-screen bg-background md:max-w-screen-2xl mx-auto px-5 text-secondary relative flex flex-col-reverse'>
      <div className='grid grid-cols-1 md:grid-cols-3 h-full w-full relative'>
        <div className='w-full h-full flex justify-start items-center'>
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
