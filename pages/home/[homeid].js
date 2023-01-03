import React from 'react'
import { useRouter } from 'next/router'
const homedetails = () => {
  const router = useRouter();

  router.query.homeid;
  return (
    <div>homedetails of home page is here!</div>
  )
}

export default homedetails