'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa6'

const ProjectIcon = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        loop: Infinity,
        repeat: Infinity,
        repeatDelay: 0,
      }}
      className='p-10 border border-secondary cursor-pointer rounded-full'
    >
      <FaCode size={'4rem'} />
    </motion.div>
  )
}

export default ProjectIcon
