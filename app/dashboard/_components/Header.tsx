import { HeaderSearchContext } from '@/app/(context)/HeaderSearchContext'
import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React, { useContext } from 'react'

function Header() {
  const {searchData,setSearchData}=useContext<any>(HeaderSearchContext)

  return (
    <div className=' backdrop-blur-3xl  fixed  w-full right-0 top-0 flex justify-between items-center p-5 shadow-md border-b-2'>
      <div className=' flex gap-2 items-center p-2'>
        <Search />
        <Input onChange={(e)=>{
           setSearchData(e.target.value)
        }} placeholder='search ...' className=' outline-none rounded-md max-w-md'></Input>
      </div>
      <div className=' flex gap-2'>
        <div className=' bg-primary text-white rounded-full h-[30px] text-sm p-2'>
          <h1>🔥Join Membership just for free</h1>
        </div>
        <UserButton />
      </div>
    </div>
  )
}

export default Header