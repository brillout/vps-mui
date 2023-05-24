import { Counter } from './Counter'
import MenuIcon from '@mui/icons-material/Menu'
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
