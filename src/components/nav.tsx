import Link from 'next/link'


const Nav = () => (
    <nav>
      <Link href="/">
        Movies from outer space
      </Link>

      <Link href="/30s">
       30s
      </Link>
      <Link href="/40s">
       40s
      </Link>
      <Link href="/50s">
       50s
      </Link>
      <Link href="/60s">
       6Os
      </Link>
      <Link href="/70s">
       70s
      </Link>
      <Link href="/80s">
       80s
      </Link>
      <Link href="/90s">
       90s
      </Link>

      <Link href="/about">
       About
      </Link>
    </nav>
)

export default Nav