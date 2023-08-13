import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/ssr-options.html#ssr-noexternal
const noExternal: string[] = []
if (isProd) {
  noExternal.push(
    ...[
      // prettier-ignore
      // MUI needs to be pre-processed by Vite in production: https://github.com/brillout/vite-plugin-ssr/discussions/901
      '@mui/base',
      '@mui/icons-material',
      '@mui/material',
      '@mui/utils'
    ]
  )
}

const config: UserConfig = {
  plugins: [react(), ssr()],
  ssr: {
    noExternal
  }
}

export default config
