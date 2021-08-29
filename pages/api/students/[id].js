import students from '../../../data/users'

export default (req, res) => {
  const { id } = req.query
  if (req.method === 'GET') {
    const result = students.find((student) => student.id === parseInt(id))
    return res.json(result)
  } else if (req.method === 'DELETE') {
    const index = students.findIndex((student) => student.id === parseInt(id))
    students.splice(index, 1)
    return res.send('daxoa')
  }
}
