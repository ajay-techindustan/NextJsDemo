import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const main = () => {
  return (
    <div style={{textAlign : "center",}} >
    <div className={styles.homedata} >This is home page!</div>
    <h3>
        <a href='/home/learn-next-js' >
            learn next js
        </a>
    </h3>
    </div>
  )
}

export default main