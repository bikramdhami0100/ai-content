import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
    <div className=' border m-2 shadow-sm  transition-all cursor-pointer hover:shadow-md p-4'>
         <Image src={item.icon} alt="icon" width={50} height={50} />
         <h1 className='font-bold  text-lg '>{item.name}</h1>
         <p className=' text-gray-600 line-clamp-3 '>{item.desc}</p>
    </div>
    </Link>
  )
}

export default TemplateCard