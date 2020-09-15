import 'styled-componets'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand: string
      brandDark: string
      orange: string
      gray300: string
      gray400: string
    }
  }
}
