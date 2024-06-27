import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between items-center p-5 shadow-md border-b-2'>
         <div className=' flex gap-2 items-center p-2'>
             <Search/>
             <Input placeholder='search ...' className=' outline-none rounded-md max-w-md'></Input>
         </div>
         <div className=' bg-primary text-white rounded-full h-[30px] text-sm p-2'>
             <h1>🔥Join Membership just for $3/month</h1>
         </div>
    </div>
  )
}

export default Header