import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

function Students() {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [student, setStudent] = useState('')
  const router = useRouter()

  useEffect(() => {
    async function fetchStudents() {
      const response = await axios.get('/api/students')
      const datas = response.data
      setStudents(datas)
      setIsLoading(false)
    }
    fetchStudents()
  }, [students])
  const handleAddStudent = async () => {
    const json = JSON.stringify({ student })
    await axios.post('/api/students', json, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setStudent('')
  }
  const handleInputChange = (e) => {
    setStudent(e.target.value)
  }

  const deleteStudent = async (id) => {
    await axios.delete(`/api/students/${id}`)
  }

  return (
    <div>
      <h1>hello</h1>
      <input type="text" value={student} onChange={handleInputChange} />
      <button onClick={handleAddStudent} className="btn btn-primary">
        add student
      </button>
      <ul>
        {students.map((student) => (
          <div key={student.id}>
            <li onClick={() => router.push(`/students/${student.id}`)}>
              {student.name}
            </li>
            <button
              className="btn btn-primary"
              onClick={() => deleteStudent(student.id)}
            >
              delete student
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Students
