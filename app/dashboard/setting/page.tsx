import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Setting() {
  return (
    <div className=' mt-4 flex w-full items-center justify-center relative'>
    
       <UserProfile />
   
    </div>
  )
}

export default Setting