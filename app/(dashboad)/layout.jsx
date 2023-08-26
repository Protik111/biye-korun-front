'use client'

import Tapbar from '@/components/dashboard/Tapbar'
import '../globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile',
  description: 'A matrimony service to find people hapiness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Tapbar></Tapbar>
        {children}
      </body>
    </html>
  )
}
