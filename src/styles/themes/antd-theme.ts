import { ThemeConfig } from 'antd'
import { CustomThemeType } from './defaultTheme'

export function getAntdTheme(theme: CustomThemeType): ThemeConfig {
  const antdTheme: ThemeConfig = {
    token: {
      colorPrimary: theme.colors.primary,
      colorText: theme.colors.primary,
      colorTextPlaceholder: theme.colors.secondary,
      colorBorder: theme.colors.secondary,
      fontFamily: "'Roboto', sans-serif",
    },
  }
  return antdTheme
}
