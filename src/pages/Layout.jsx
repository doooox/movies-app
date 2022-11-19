import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../Routes'

const Layout = () => {
  return (
    <div>
    <nav>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  )
}

export default Layout