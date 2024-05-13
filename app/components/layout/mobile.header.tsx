'use client'
import { useMenu } from '@/app/components/providers/menu.provider'
import { Button } from '@nextui-org/react'
import React from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
export default function MobileHeader() {
  const { activeMenu, toogleSidebarMenu } = useMenu()
  const Icon = activeMenu?.icon
  return (
    <div className='flex flex-row w-full  md:hidden justify-between mt-5 sticky top-0 py-8  bg-primary'>
      <Button
        startContent={Icon && <Icon />}
        size={'md'}
        variant='faded'
        className='bg-transparent border border-secondary text-white pointer-events-none uppercase'
      >
        {activeMenu?.name}
      </Button>
      <AiOutlineMenuFold
        size={'2rem'}
        className='text-secondary hover:text-white cursor-pointer md:hidden'
        onClick={toogleSidebarMenu}
      />
    </div>
  )
}
