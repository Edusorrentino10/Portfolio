'use client'

import { ReactNode } from 'react'
// eslint-disable-next-line camelcase
import { Roboto } from 'next/font/google'
import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@/contexts/useTheme'

import '@/lib/i18n'
import { MenuMobileProvider } from '@/contexts/menuMobileContext'
import { Metadata } from 'next'

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Edu | Portfolio',
}

globalStyles()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link rel="shortcut icon" type="image/svg" href="/favicon.svg" />
      </head>
      <body className={`${robotoFont.className}`}>
        <ThemeProvider>
          <MenuMobileProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </MenuMobileProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
