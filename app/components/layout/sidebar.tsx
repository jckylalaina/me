'use client'
import { useMenu, MenuItem } from '@/app/components/providers/menu.provider'
import SocialsMedia from '@/app/components/social-media'
import { Button } from '@nextui-org/react'
import React from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { AnimatePresence ,motion} from "framer-motion"
export default function SideBar() {
  const {
    menuList,
    isSideBarOpen,
    toogleSidebarMenu,
    setActiveMenu,
    getActiveMenu,
  } = useMenu()
  const handleClick = (menu: MenuItem) => {
    document?.querySelector(`#${menu.name}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setActiveMenu(menu)
  }
  return (
    <div
      className={`backdrop-blur-sm	 fixed top-0 h-screen w-full ${isSideBarOpen ? '' : 'hidden'} overflow-hidden`}
    >
      <AnimatePresence>
     {isSideBarOpen && <motion.div
        initial={{ opacity: 0,x:500 }}
        animate={{ opacity: 1 ,x:0}}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0,x:500 }}
        className={`absolute right-0 h-full bg-black bg-opacity z-20 w-80 py-4 pl-8 `}
      >
        <div className='text-secondary text-lg pl-4 flex flex-row justify-between pr-8 items-center'>
          <span>Menu</span>
          <AiOutlineMenuUnfold
            size={'2rem'}
            className='text-secondary hover:text-white cursor-pointer'
            onClick={toogleSidebarMenu}
          />
        </div>
        <ul className='flex flex-col justify-start items-start relative mt-8'>
          {menuList.map(menu => {
            const Icon = menu.icon
            return (
              <Button
                size='md'
                key={menu.name}
                className={`bg-transparent text-secondary-50 hover:text-success ${getActiveMenu()?.name == menu.name && 'text-success'}`}
                onClick={() => handleClick(menu)}
                startContent={<Icon size={'1.1rem'} />}
              >
                {menu.name}
              </Button>
            )
          })}
        </ul>
        <p className='text-secondary text-lg pl-4 mt-10 flex flex-row justify-between pr-5 items-center'>
          Socials
        </p>
        <div className='mt-8 ml-4'>
          <SocialsMedia size='sm' />
        </div>
      </motion.div> }
      </AnimatePresence>
    </div>
  )
}
