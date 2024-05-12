'use client'
import About from '@/app/components/feat-about/about'
import Contact from '@/app/components/feat-contact/contact'
import Intro from '@/app/components/feat-intro/intro'
import Resume from '@/app/components/feat-resume/resume'
import Skills from '@/app/components/feat-skills/skills'
import Specialization from '@/app/components/feat-specialization/specialization'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa6'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { TbSubtask } from 'react-icons/tb'
// Define the shape of your menu item
export interface MenuItem {
  name: string
  icon: React.ReactNode
  component: React.ReactNode
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
  const menuList: MenuItem[] = [
    {
      name: 'introduce',
      icon: <AiOutlineHome />,
      component: <Intro />,
    },
    {
      name: 'about',
      icon: <AiOutlineUser />,
      component: <About />,
    },
    {
      name: 'resume',
      icon: <IoBriefcaseOutline />,
      component: <Resume />,
    },
    {
      name: 'specializations',
      icon: <TbSubtask />,
      component: <Specialization />,
    },
    {
      name: 'stack',
      icon: <HiOutlineWrenchScrewdriver />,
      component: <Skills />,
    },
    {
      name: 'contact',
      icon: <FaDollarSign />,
      component: <Contact />,
    },
  ]
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null)
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    const menu = menuList.find(menu => menu.name === hash)
    if (menu) {
      setActiveMenu(menu)
    } else {
      setActiveMenu(menuList[0])
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const menu = menuList.find(menu => menu.name === entry.target.id)
            menu && setActiveMenu(menu)
          }
        })
      },
      { threshold: 0.5 }, // Adjust threshold as needed
    )

    // Observe all div elements with the 'menu-item' class
    document.querySelectorAll('.item-section').forEach(item => {
      observer.observe(item)
    })

    // Cleanup function
    return () => {
      observer.disconnect()
    }
  }, [])
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
