import Link from 'next/link'
import React from 'react'

const User = async () => {
  return (
    <div>
      <h1> User Dashboard</h1>
      <ul>
        <li><Link href='/about/dashboard/user/1'>User 1</Link></li>
        <li><Link href='/about/dashboard/user/2'>User 2</Link></li>
        <li><Link href='/about/dashboard/user/3'>User 3</Link></li>
      </ul>
    </div>
  )
}

export default User