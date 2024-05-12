import React from 'react'
type TitleProps = {
  children?: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
}
export default function Title({
  children,
  className,
  as: Component = 'h1',
  ...props
}: TitleProps) {
  const combinedClassName = className
    ? `[&>span]:text-success ${className}`
    : '[&>span]:text-success'
  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  )
}
