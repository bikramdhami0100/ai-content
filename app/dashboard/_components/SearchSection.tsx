
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({setSearchInput}:any) {

  // if (searchData) {
  //      setSearchInput(searchData)
  // }else{
  //   // setSearchInput("")
  //   setSearchData("")
  // } set

  return (
    <div className='flex flex-col gap-1 justify-center items-center p-10 bg-gradient-to-br from-purple-500  via-violet-700 to-primary'>
      <h1 className=' text-3xl font-bold text-white'>Browse all Templates </h1>
      <p className=' text-white text-sm'>What would you like to create today</p>
      <div className=' w-[50%]'>
         <div className=' flex gap-2 items-center p-2 border w-full rounded-md bg-white '>
             <Search className=' text-primary'/>
             <Input  onChange={(event)=>setSearchInput(event.target.value )} className=' border-none focus-within:outline-none focus:outline-none font-bold w-full outline-none bg-transparent' placeholder='Search ..'/>
         </div>
      </div>
    </div>
  )
}

export default SearchSection