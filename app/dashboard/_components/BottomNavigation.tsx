"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import UsageTrack from './UsageTrack'

function BottomNavigation() {
   const sidepath = usePathname()
   const MenuList = [
      {
         name: "Home",
         icon: Home,
         path: "/dashboard"
      },
      {
         name: "History",
         icon: FileClock,
         path: "/dashboard/history"
      },
      {
         name: "Billing",
         icon: WalletCards,
         path: "/dashboard/billing"
      },
      {
         name: "Setting",
         icon: Settings,
         path: "/dashboard/setting"
      }
   ]
   return (
      <div className='  md:hidden lg:hidden p-5 shadow-sm border relative'>
         
         <div className=" bg-slate-200 rounded-md flex fixed bottom-0  justify-around items-center  w-full  border-t-2">
            {
               MenuList.map((item, index) => {
                  return (
                     <Link href={item.path}>
                        <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${sidepath == item.path && "bg-primary mt-2"}`}>
                           {<item.icon />}
                           <h1 >{item.name}</h1>
                        </div>
                     </Link>
                  )
               })
            }
         </div>
       
      </div>
   )
}

export default BottomNavigation