'use client'
import React, { createContext, useContext, useState } from 'react'

// Define the shape of your menu item
interface MenuItem {
  id: number
  name: string
  icon: React.ReactNode
}

// Define the shape of your context
interface MenuContextType {
  menuList: MenuItem[]
  activeMenu: MenuItem | null
  setActiveMenu: (menu: MenuItem) => void
  getActiveMenu: () => MenuItem | null
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}

// Create the provider component
export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuList, setMenuList] = useState<MenuItem[]>([])
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null)

  const handleSetActiveMenu = (menu: MenuItem) => {
    setActiveMenu(menu)
  }

  const handleGetActiveMenu = () => {
    return activeMenu
  }

  const value: MenuContextType = {
    menuList,
    activeMenu,
    setActiveMenu: handleSetActiveMenu,
    getActiveMenu: handleGetActiveMenu,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
