'use client'
import { animate } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export default function Counter({
  from,
  to,
  className,
}: {
  from: number
  to: number
  className: string
}) {
  const nodeRef = useRef<HTMLParagraphElement>()

  useEffect(() => {
    const node = nodeRef.current

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        if (node) {
          node.textContent = `${value.toFixed(0)}+`
        }
      },
    })

    return () => controls.stop()
  }, [from, to])

  return <p className={className} ref={nodeRef as any} />
}
