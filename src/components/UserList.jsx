import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users, setUsers }) => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} users={users} setUsers={setUsers} />
      ))}
    </div>
    </>
  )
}

export default UserList
