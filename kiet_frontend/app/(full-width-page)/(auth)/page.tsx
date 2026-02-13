import React from 'react'
import Link from 'next/link'

export default function AuthIndex() {
  return (
    <div>
      <h2>Auth index</h2>
      <p>Select:</p>
      <ul>
        <li><Link href="/full-width-page/auth/signin">Sign in</Link></li>
        <li><Link href="/full-width-page/auth/signup">Sign up</Link></li>
      </ul>
    </div>
  )
}
