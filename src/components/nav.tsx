/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'



const Nav = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/" sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>
        Movies App
      </Link>

      <Link href="/movies" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       Movies
      </Link>

      <Link href="/about" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       About
      </Link>




    </nav>
  </header>
)

export default Nav