import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

Student.propTypes = {}

function Student({ data }) {
  return (
    <div>
      <h2>{data.id}</h2>
      <h2>{data.name}</h2>
    </div>
  )
}

export const getStaticProps = async (contex) => {
  const response = await axios.get(
    `http://localhost:3000/api/students/${contex.params.id}`
  )
  const data = response.data
  return {
    props: {
      data,
    },
  }
}

export const getStaticPaths = async () => {
  const response = await axios.get(`http://localhost:3000/api/students`)
  const data = response.data
  const paths = data.map((element) => ({ params: { id: `${element.id}` } }))
  return {
    paths,
    fallback: false,
  }
}

export default Student
