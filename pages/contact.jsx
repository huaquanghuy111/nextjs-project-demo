import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/Contact.module.scss'
import Footer from '../components/Footer'
import Image from 'next/image'
Contact.propTypes = {}

function Contact(props) {
  const list = ['1', '2', '3']
  return (
    <div>
      {list.map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} width="280" height="420" />
          </div>
        )
      })}
    </div>
  )
}

export default Contact

Contact.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
