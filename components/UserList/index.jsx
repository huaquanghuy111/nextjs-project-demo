import React from 'react'
import PropTypes, { element } from 'prop-types'
import Link from 'next/link'

UserList.propTypes = {
  list: PropTypes.array,
}
UserList.default = {
  list: [],
}
function UserList(props) {
  const { list } = props
  return (
    <div>
      <ul>
        {list.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
