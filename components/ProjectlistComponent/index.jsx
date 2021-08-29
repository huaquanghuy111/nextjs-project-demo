import React from 'react'
import PropTypes from 'prop-types'

ProjectlistComponent.propTypes = {
  list: PropTypes.array,
}
ProjectlistComponent.default = {
  list: [],
}

function ProjectlistComponent(props) {
  const { list } = props
  return (
    <div>
      <ul>
        {list.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectlistComponent
