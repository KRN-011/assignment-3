import React, { useEffect, useState } from 'react'
import UserList from './components/UserList'
import axios from 'axios'

const Index = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setUsers(response.data))
    .then((error) => console.error("Error:", error))
  }, [])

  return (
    <>
      <UserList users={users} setUsers={setUsers}/>
    </>
  )
}

export default Index
