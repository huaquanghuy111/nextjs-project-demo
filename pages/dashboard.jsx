import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getSession, signIn } from 'next-auth/client'

Dasboard.propTypes = {}

function Dasboard(props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }
    securePage()
  }, [])
  if (loading) return <h2>loading...</h2>
  return (
    <div>
      <h1>Welcome to Dasboard</h1>
    </div>
  )
}

export default Dasboard
