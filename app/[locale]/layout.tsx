import type { Metadata } from 'next'
import React from 'react'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Provider from '@/app/components/providers/provider'
import BaseLayout from '@/app/components/layout/layout'
import { Analytics } from '@vercel/analytics/react'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacky R. - Next.js Developer & Cloud Enthusiast',
  description:
    'Explore the portfolio of Jacky Randrianarivony, a skilled web developer from Antananarivo, Madagascar. Specializing in Next.js, AWS, and Tailwind CSS, Jacky delivers innovative and efficient web solutions. Discover projects that showcase expertise in web development, cloud services, and automation.',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Provider>
          <BaseLayout>{children}</BaseLayout>
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}
