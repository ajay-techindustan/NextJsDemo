import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div>
        <nav>
        <ul  className={styles.liststyle}>
    {/* style={{cursor:'pointer', display : 'flex', textDecoration : "none", justifyContent:'space-around', marginTop:"20px", listStyle:'none', fontSize:'30px' }}  */}
      <Link href="home/details" ><li className={styles.listli} >Details</li></Link>
      <Link href="home/blog"><li className={styles.listli}>Blog</li></Link>
      <Link href="home/contact"><li className={styles.listli}>contact</li></Link>
      <Link href="home/about"><li className={styles.listli}>About</li></Link>

    </ul>
        </nav>
    </div>
  )
}

export default Navbar