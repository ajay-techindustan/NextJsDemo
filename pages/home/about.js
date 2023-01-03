import React from 'react'
import Link from 'next/link'
const about = () => {
  return (
    <div>
    <h2>This is about Page!</h2>
    <ul>
      <Link href='/ajay'><li>ajay</li></Link>
      <Link href='/ajay/ajay1'><li> ajay 1 </li></Link>
      <Link href='/ajay/ajay2'><li>ajay 2</li></Link>
    </ul>
    </div>
  )
}

export default about