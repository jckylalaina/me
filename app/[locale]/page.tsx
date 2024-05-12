'use client'

import Section from '@/app/components/layout/section'
import { MenuItem, useMenu } from '@/app/components/providers/menu.provider'
import React from 'react'
export default function Home() {
  const { menuList } = useMenu()

  return (
    <div className='flex gap-24 flex-col'>
      {menuList.map((menu: MenuItem, index: number) => {
        return (
          <Section title={menu.name} icon={menu.icon} key={index}>
            {menu.component}
          </Section>
        )
      })}
    </div>
  )
}
