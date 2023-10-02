import { ThemeConfig } from 'antd'
import { CustomThemeType } from './defaultTheme'

export function getAntdTheme(theme: CustomThemeType): ThemeConfig {
  const antdTheme: ThemeConfig = {
    token: {
      colorPrimary: theme.colors.primary,
      colorText: theme.colors.text,
      colorTextPlaceholder: theme.colors.textLighter,
      colorBorder: theme.colors.textLighter,
      fontFamily: "'Roboto', sans-serif",
    },
  }
  return antdTheme
}
