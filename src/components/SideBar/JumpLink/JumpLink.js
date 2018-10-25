import React from 'react'
import { Link } from 'react-scroll'

export default ({children, to}) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={250}
      offset={-50}
      >
      {children}
      </Link>
  );
}
