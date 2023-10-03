/* eslint-disable @next/next/no-page-custom-font */
import { AntdConfigProvider } from '@/lib/AntdConfigProvider'
import AntdRegistry from '@/lib/AntdRegistry'
import { ReactQueryProvider } from '@/lib/ReactQueryProvider'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'
import { StyledComponentsThemeProvider } from '@/lib/StyledComponentsThemeProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'antd & styled-components',
  description: 'Boilerplate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <ReactQueryProvider>
              <StyledComponentsThemeProvider>
                <AntdConfigProvider>{children}</AntdConfigProvider>
              </StyledComponentsThemeProvider>
            </ReactQueryProvider>
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
