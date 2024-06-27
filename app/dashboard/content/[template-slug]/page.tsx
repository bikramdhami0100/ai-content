"use client"
import React, { useState } from 'react'
import FormSection from '../components/FormSection'
import OutputSection from '../components/OutputSection'
import { Templates } from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AIModels'
import Link from 'next/link'
import { db } from '@/utils/Dbcon'
import { AIOutPutSchema } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
export interface PROPS{
    params:{

        "template-slug":string,
    }
}
function CreateNewConten(params:PROPS) {
  const [loading,setloading]=useState(false)
  const [aiOutPut,setAiOutPut]=useState("")
  const user=useUser()
    const filterData:any=Templates?.find((item)=>{
       return item.slug==params.params['template-slug']
    })
 const GeneratedAIContent=async(value:any)=>{
    // console.log(value)
    setloading(true)
    const SelectedPrompt=filterData?.aiPrompt
    const FinalAIPrompt=JSON.stringify(value)+","+SelectedPrompt;
    const result=await chatSession.sendMessage(FinalAIPrompt)
    setAiOutPut(result.response.text())
    await SaveDb(value,filterData?.slug);
    setloading(false)
 }
 const SaveDb=async(formData:any,slug:any)=>{
  const result=await db.insert(AIOutPutSchema).values({formData:formData, templateSlug:slug, aiResponse:aiOutPut,createdBy:user?.user?.primaryEmailAddress?.emailAddress,createdAt:moment().format("DD/MM/YYYY")})
 }
 console.log(aiOutPut , "data")
  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-5'>
         {/* form section */}
         <div>
           <Link href={"/dashboard"} className=' bg-primary flex w-[100px] rounded-md text-white p-2' ><ArrowLeft/> back</Link>
         <FormSection userFormInput={(value:any)=>{
           GeneratedAIContent(value)
         }} filterData={filterData} loading={loading}/>
         </div>
          {/* Output section */}
           <div className=' col-span-2'>
           <OutputSection aiOutPut={aiOutPut} />
           </div>
    </div>
  )
}

export default CreateNewConten