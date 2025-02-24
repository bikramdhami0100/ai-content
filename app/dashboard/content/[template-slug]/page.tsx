"use client"
import React, { useState } from 'react'
import FormSection from '../components/FormSection'
import OutputSection from '../components/OutputSection'
import { Templates } from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { chatSession } from '@/utils/AIModels'
import Link from 'next/link'
import { db } from '@/utils/Dbcon'
import { AIOutPutSchema } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
// import { RocketIcon } from "@radix-ui/react-icons"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
export interface PROPS {
  params: {
    "template-slug": string,
  }
}

function CreateNewContent({ params }: PROPS) {
  const [loading, setLoading] = useState(false)
  const [aiOutPut, setAiOutPut] = useState("");
  const [copyTextAlert,setCopyTextAlert]=useState(false)
  const { user } = useUser()

  const filterData: any = Templates?.find((item) => {
    return item.slug === params['template-slug']
  })

  const GeneratedAIContent = async (value: any) => {
    setLoading(true)
    const SelectedPrompt = filterData?.aiPrompt
    const FinalAIPrompt = JSON.stringify(value) + "," + SelectedPrompt
    const result = await chatSession.sendMessage(FinalAIPrompt)
    const responseText = await result.response.text()
  const copyResponseText=  navigator.clipboard.writeText(responseText)

    setAiOutPut(responseText)
    await SaveDb(JSON.stringify(value), filterData?.slug, responseText)
    setLoading(false)
  }


  const SaveDb = async (formData: any, slug: any, aiOutPut: any) => {
    try {
      const result = await db.insert(AIOutPutSchema).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiOutPut,
        createdBy: user?.primaryEmailAddress?.emailAddress || 'unknown',
        createdAt: moment().format("YYYY-MM-DD") // Use standard date format for consistency
      })
      console.log(result)
    } catch (error) {
      console.error("Error inserting data into the database:", error)
    }
  }
setTimeout(() => {
   setCopyTextAlert(false)
}, 1500);

  return (
    <div className='z-0'>
      {
        copyTextAlert&&   <Alert className=' bg-green-300 font-bold text-xl flex gap-2 p-6'>
        {/* <RocketIcon className="h-4 w-4" /> */}
        
        <AlertTitle>🚀</AlertTitle>
        <AlertDescription className=' text-lg'>
          Copy to Clipboard successfully !
        </AlertDescription>
      </Alert>
      }
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-5'>

      {/* form section */}
      <div>
        <Link href="/dashboard" className='bg-primary flex w-[100px] rounded-md text-white p-2'>
          <ArrowLeft /> back
        </Link>
        <FormSection 
          userFormInput={(value: any) => GeneratedAIContent(value)} 
          filterData={filterData} 
          loading={loading} 
        />
      </div>
      {/* Output section */}
      <div className='col-span-2 z-0 '>
        <OutputSection aiOutPut={aiOutPut} setCopyTextAlert={setCopyTextAlert} />
      </div>
    </div>
    </div>
  )
}

export default CreateNewContent
