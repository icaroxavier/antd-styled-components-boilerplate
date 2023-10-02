import { CustomThemeType } from '@/styles/themes/defaultTheme'
import 'styled-components'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomThemeType {}
}
