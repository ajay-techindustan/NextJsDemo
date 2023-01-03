import React from 'react'
import Link from 'next/link'
const ajay1 = () => {
  return (
    <div>This is Ajay 1 page!!
      <ul>
      <Link href='/home/about'><li>About</li></Link>
      <Link href='/home'><li> Home </li></Link>
      <Link href='/home/homedetails'><li>HomeId</li></Link>
    </ul>
    </div>
  )
}

export default ajay1