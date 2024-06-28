import React, { useContext, useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
import { Templates } from '@/app/(data)/Templates'
import { HeaderSearchContext } from '@/app/(context)/HeaderSearchContext'

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
  const {searchData,setSearchData}=useContext<any>(HeaderSearchContext)
  const [templateList,setTemplateList]=useState(Templates)
  console.log(userSearchInput)
  useEffect(()=>{

  if(userSearchInput || searchData){
    let filterData=templateList.filter((item,index:number)=>{
      // console.log(item.name)
      return item.name.toLowerCase().includes(userSearchInput?.toLowerCase() || searchData?.toLowerCase())
    })
    setTemplateList(filterData)
  }else{
    setTemplateList(Templates)
  }
  },[userSearchInput,searchData])
  return (
    <div className=' grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6'>
         {
            templateList.map((item:TEMPLATE,index:number)=>(<TemplateCard {...item} />))
         }
    </div>
  )
}

export default TemplateListSection