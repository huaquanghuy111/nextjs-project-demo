import students from '../../../data/users'

export default (req, res) => {
  if (req.method === 'GET') {
    return res.json(students)
  } else if (req.method === 'POST') {
    //console.log(student)
    const student = req.body.student
    const newStudent = {
      id: Date.now(),
      name: student,
    }
    students.push(newStudent)
    return res.json(newStudent)
  }
}
