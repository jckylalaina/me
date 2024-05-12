'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

export const EaseInLeft = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export const EaseInTop = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
/* eslint-disable */
type easeScrollProps = {
  animationFrom: any
  animationTo: any
  children?: React.ReactNode | any
  duration?: number
}
/* eslint-enable */
export const EaseOnScroll = ({
  children,
  animationFrom,
  animationTo,
  duration = 1,
}: easeScrollProps) => {
  const controls = useAnimation()
  const elementRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const contentScroll = document.getElementById('content-scroll')
    const handleScroll = () => {
      const rect = elementRef.current?.getBoundingClientRect()
      if (rect && rect.top && contentScroll?.scrollTop) {
        const distanceFromTop = rect.top - contentScroll?.scrollTop
        const threshold = 500
        if (distanceFromTop <= threshold) {
          controls.start({ opacity: 1, ...animationTo })
        } else {
          controls.start({ opacity: 0, ...animationFrom })
        }
      }
    }
    contentScroll?.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls, animationFrom, animationTo])

  return (
    <motion.div
      initial={{ opacity: 0, ...animationFrom }}
      animate={controls}
      transition={{ duration: duration }}
      //eslint-disable-next-line
      ref={elementRef as any}
    >
      {children}
    </motion.div>
  )
}
