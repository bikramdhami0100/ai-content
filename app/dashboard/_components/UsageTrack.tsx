"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/Dbcon'
import { AIOutPutSchema } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'

function UsageTrack() {
    const {totalUsage,setTotalUsage}:any=useContext(TotalUsageContext)
    const { user } = useUser()
    const getData = async () => {
        {/* @ts-ignore */ }
        // // @ts-ignore
        // const result = await db.select().from(AIOutPutSchema)
        //     .where(eq(AIOutPutSchema.createdBy, user?.primaryEmailAddress?.emailAddress))
        // getTotalUsages(result)
    }
    const getTotalUsages = (result: any) => {
        let total: number = 0;
        result.forEach((element: any) => {
            total = total + Number(element.aiResponse?.length)
        })
        setTotalUsage(total)
        console.log("total is ", total)
    }
    useEffect(() => {

        user && getData()
    }, [user])

    return (
        <div className=''>
            <div className=' bg-primary text-white p-3 rounded-lg m-5'>
                <h2 className=' font-medium '>Free</h2>
                <div className=' h-2 bg-blue-300 w-full rounded-full mt-3'>
                    {/* <div style={{ width:(totalUsage/10000)*100+ "%" }} className=' h-2 bg-white rounded-full'>

                    </div> */}
         

                </div>
                {/* <h2 className=' text-sm my-4'> {totalUsage}/10,000 credit used </h2> */}
            </div>
            <Button variant={"secondary"} className=' font-bold  text-xl w-full text-primary bg-white'>Free</Button>
        </div>
    )
}

export default UsageTrack