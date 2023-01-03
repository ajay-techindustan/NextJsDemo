import React from 'react'

const ajay2 = () => {

   async function getServerSideProps(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums `)
    const data = await res.json()

    return {props : {data}}
  }

  return (
    <>
    <div>This is ajay2 Page!!</div>


    </>
  )
}

export default ajay2