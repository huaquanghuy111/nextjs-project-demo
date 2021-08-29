import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

Navs.propTypes = {}

function Navs(props) {
  const [session, loading] = useSession()
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#">
          Active
        </Link>
      </li>
      {!loading && !session && (
        <li className="nav-item">
          <Link className="nav-link" href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              Sign IN
            </a>
          </Link>
        </li>
      )}
      {session && (
        <li className="nav-item">
          <Link className="nav-link" href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              Sign out
            </a>
          </Link>
        </li>
      )}

      <li className="nav-item">
        <Link
          className="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </Link>
      </li>
    </ul>
  )
}

export default Navs
