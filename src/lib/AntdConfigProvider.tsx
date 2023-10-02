'use client'
import { getAntdTheme } from '@/styles/themes/antd-theme'
import { ConfigProvider } from 'antd'
import { useTheme } from 'styled-components'

export function AntdConfigProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme()
  const antdTheme = getAntdTheme(theme)
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
}
