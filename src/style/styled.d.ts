// eslint-disable-next-line import/no-unresolved
import { RobustTheme } from '../uikit/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends RobustTheme {}
}
