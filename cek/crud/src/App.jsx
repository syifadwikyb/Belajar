import {useEffect, useState} from 'react'
import Axios from 'axios'

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    getStudents()
  }, [])

  const getStudents = async () => {
    const response = await Axios.get('https://localhost:3002/students')
    setStudents(response.data)
  }

  return (
    .
  )
}