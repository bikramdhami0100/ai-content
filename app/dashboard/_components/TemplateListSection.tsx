import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
import { Templates } from '@/app/(data)/Templates'

export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required:boolean
}
function TemplateListSection({userSearchInput}:any) {
  const [templateList,setTemplateList]=useState(Templates)
  console.log(userSearchInput)
  useEffect(()=>{
  if(userSearchInput){
    let filterData=templateList.filter((item,index:number)=>{
      // console.log(item.name)
      return item.name.toLowerCase().includes(userSearchInput.toLowerCase())
    })
    setTemplateList(filterData)
  }else{
    setTemplateList(Templates)
  }
  },[userSearchInput])
  return (
    <div className=' grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6'>
         {
            templateList.map((item:TEMPLATE,index:number)=>(<TemplateCard {...item} />))
         }
    </div>
  )
}

export default TemplateListSection