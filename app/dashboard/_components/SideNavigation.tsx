"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideNavigation() {
    const sidepath=usePathname()
    const MenuList=[
         {
            name:"Home",
            icon:Home,
            path:"/dashboard"
         },
         {
            name:"History",
            icon:FileClock,
            path:"/dashboard/history"
         },
         {
            name:"Billing",
            icon:WalletCards,
            path:"/dashboard/billing"
         },
         {
            name:"Setting",
            icon:Settings,
            path:"/dashboard/setting"
         }
    ]
  return (
    <div className=' h-screen p-5 shadow-sm border'>
        <div>
        <Image alt='logo' src={"/logo.svg" } height={60} width={100} ></Image>
        </div>
        <div className="  border-t-2">
             {
                MenuList.map((item,index)=>{
                    return(<div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${sidepath==item.path&&"bg-primary mt-2"}`}>
                         {<item.icon/>}
                         <h1 >{item.name}</h1>
                    </div>)
                })
             }
        </div>
    </div>
  )
}

export default SideNavigation