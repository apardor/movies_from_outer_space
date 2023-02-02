/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'



const Nav = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/" sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>
        Movies from outer space
      </Link>

      <Link href="/movies/30s" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       3Os
      </Link>
      <Link href="/movies/40s" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       4Os
      </Link>
      <Link href="/movies/50s" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       5Os
      </Link>
      <Link href="/movies/60s" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       6Os
      </Link>
      <Link href="/movies/70s" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       7Os
      </Link>
      <Link href="/movies/80s" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       8Os
      </Link>

      <Link href="/about" sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>
       About
      </Link>




    </nav>
  </header>
)

export default Nav