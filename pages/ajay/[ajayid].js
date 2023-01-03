import React from 'react'
import {useRouter} from 'next/router'

const ajayDetails = () => {
    const router = useRouter(); 
    router.query.ajayDetails;
  return (
    <div>This is ajayDetails Dayanamic page!</div>
  )
}

export default ajayDetails