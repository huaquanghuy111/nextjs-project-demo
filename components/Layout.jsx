import React from 'react'
import styles from '../styles/Layout.module.scss'
import Navs from './Navs'

function Layout({ children }) {
  return (
    <>
      <Navs />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
