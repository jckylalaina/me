import { MenuProvider } from '@/app/components/providers/menu.provider'
import { NextUICustomProvider } from '@/app/components/providers/nextui.provider'
import React from 'react'
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextUICustomProvider>
      <MenuProvider>{children}</MenuProvider>
    </NextUICustomProvider>
  )
}
