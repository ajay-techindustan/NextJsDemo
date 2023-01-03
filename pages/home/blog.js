import React from 'react'
import Link from 'next/link'


const blog = () => {
      return (
        <>
  <style jsx global>
      {`
      .blog{
        margin-top:200px;
        text-align:center;
      }
      .bloghead{
        font-size: 42px;
        color:orange;
        padding:10px 20px;
        background-color:gray;
      }
      .blogul{
        display:flex;
        justify-content:space-around;
        font-size:24px;
        list-style:none;
        margin-top:24px;
      }
      .blogli{
        background-color:orange;
        padding:10px 14px;
        border-radius:14px;
      }
      `}
    </style>
    <div className='blog' >
    <h2 className='bloghead' >This is blog Page!</h2>
    <ul className='blogul' >
      <Link href='/home/data'><li className='blogli' >Data</li></Link>
      <Link href='/home/data/data1'><li className='blogli'> Data 1 </li></Link>
      <Link href='/home/data/data2'><li className='blogli'>Data 2</li></Link>
    </ul>
    </div>
    </>
  )
}

export default blog