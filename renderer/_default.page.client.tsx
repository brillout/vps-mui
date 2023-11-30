export { render }

import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'
import createEmotionCache from './createEmotionCache'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.getElementById('react-root')
  if (!root) throw new Error('DOM element #react-root not found')
  const emotionCache = createEmotionCache()

  hydrateRoot(
    root,
    <PageShell pageContext={pageContext} emotionCache={emotionCache}>
      <Page {...pageProps} />
    </PageShell>
  )
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
