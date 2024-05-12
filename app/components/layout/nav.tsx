'use client'
import { useMenu, MenuItem } from '@/app/components/providers/menu.provider'
import React from 'react'
import { Button } from '@nextui-org/react'
export default function Nav() {
  const { menuList, setActiveMenu, getActiveMenu } = useMenu()
  const handleClick = (menu: MenuItem) => {
    document?.querySelector(`#${menu.name}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setActiveMenu(menu)
  }
  return (
    <div className='rounded-full px-2 py-5 flex flex-col gap-3 absolute top-1/2  -translate-y-1/2 right-5 border border-secondary'>
      {menuList.map((menu: MenuItem, index: number) => {
        return (
          <Button
            size='md'
            key={index}
            isIconOnly
            className={`bg-transparent hover:text-success ${getActiveMenu()?.name == menu.name && 'text-success'}`}
            onClick={() => handleClick(menu)}
          >
            {menu.icon}
          </Button>
        )
      })}
    </div>
  )
}
