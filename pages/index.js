import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx >
        {`
          .hometop{
            text-align:center;
            margin-top:10%;
          }
          
        `}
      </style>
      <div className='hometop'>
      <Image
      className={styles.indeximg}
      src='/images/download.jpeg'
      alt='sample image'
      height={150}
      width={150}
       />
       <div style={{textAlign:'center', marginTop:'50px'}} >
       <h2 className='bloghead' ><Link href='./home' > welcome next js </Link> </h2>
       </div>
       </div>
    </>
  )
}
