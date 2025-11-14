'use client'

import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
