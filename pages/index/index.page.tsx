import { Counter } from './Counter'
import Menu from '@mui/icons-material/Menu'
// Workaround for https://github.com/mui/material-ui/issues/37375 (see https://github.com/brillout/vite-plugin-ssr/discussions/901 for more info).
// Instead of having to do this every time we import a MUI component, we can:
//  - Add MUI to ssr.noExternal for the production build: https://github.com/brillout/vite-plugin-ssr/discussions/901#discussioncomment-5985771
//  - Use https://github.com/cyco130/vite-plugin-cjs-interop for automatically applying this workaround
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MenuIcon: typeof Menu = Menu.default ?? Menu
console.log('MenuIcon', MenuIcon)

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      <MenuIcon />
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
