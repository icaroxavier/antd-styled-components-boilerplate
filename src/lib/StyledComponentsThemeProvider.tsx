'use client'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import { ThemeProvider } from 'styled-components'

export function StyledComponentsThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children} <GlobalStyles />
    </ThemeProvider>
  )
}
