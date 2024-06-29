"use client"
import { db } from '@/utils/Dbcon';
import { AIOutPutSchema } from '@/utils/schema';
import React, { useEffect, useState } from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
import { Copy, Delete } from 'lucide-react';
import { eq } from 'drizzle-orm';
export interface HISTORY {
    aiResponse: string,
    createdAt: string,
    createdBy: string,
    formData: string,
    id: number,
    templateSlug: string
}
function History() {
    const [copyTextAlert,setCopyTextAlert]=useState(false)
    const [history, setHistory] = useState<any>();
    const GetAllDataFromPostgres = async () => {
        const result = await db.select().from(AIOutPutSchema).execute();
        setHistory(result)
      
    }
const HandleClickToCopy=(text:any)=>{
    navigator.clipboard.writeText(text)
    setCopyTextAlert(true)
}
    const handleDeleteHistory = async (id: number) => {
        try {
            const result = await db
                .delete(AIOutPutSchema)
                .where(eq(AIOutPutSchema.id, id))
                .execute();
            
            console.log(result);
    
            // Update the local state to reflect the deletion
            setHistory(history.filter((item: HISTORY) => item.id !== id));
        } catch (error) {
            console.error("Error deleting data from the database:", error);
            throw new Error("Unable to delete data from the database.");
        }
    };
    
    useEffect(() => {
        GetAllDataFromPostgres()
    }, [])
    setTimeout(() => {
        setCopyTextAlert(false)
     }, 1500);
     
    return (
        <div>
            <div>
            {
        copyTextAlert&&   <Alert className=' bg-green-300 font-bold text-xl flex gap-2 p-6'>
        {/* <RocketIcon className="h-4 w-4" /> */}
        
        <AlertTitle>🚀</AlertTitle>
        <AlertDescription className=' text-lg'>
          Copy to Clipboard successfully !
        </AlertDescription>
      </Alert>
      }
            </div>
            {
                history ? (<Table>
                    <TableCaption>A list of history</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Id</TableHead>
                            <TableHead>createdBy</TableHead>
                            <TableHead>aiResponse</TableHead>
                            <TableHead>templateSlug</TableHead>
                            <TableHead>createdAt</TableHead>
                            <TableHead>copy</TableHead>
                            <TableHead>Delete</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {history && history.map((item: HISTORY, index: number) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>{item.createdBy}</TableCell>
                                <TableCell className=' line-clamp-3' >{item.aiResponse}</TableCell>
                                <TableCell className=" text-ellipsis text-wrap  overflow-hidden  ">{item.formData}</TableCell>
                                <TableCell>{item.createdAt}</TableCell>
                                <TableCell onClick={() => {
                                 HandleClickToCopy(item.aiResponse)
                                }} className=' cursor-pointer'><Copy /> Copy</TableCell>
                                <TableCell className=' cursor-pointer' onClick={() => {
                                    handleDeleteHistory(item.id)
                                }}><Delete />Delete</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        {/* <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow> */}
                    </TableFooter>
                </Table>)
                    : (
                        <Table>
                            <TableCaption>A list of history</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Id</TableHead>
                                    <TableHead>createdBy</TableHead>
                                    <TableHead>aiResponse</TableHead>
                                    <TableHead>templateSlug</TableHead>
                                    <TableHead>createdAt</TableHead>
                                    <TableHead>copy</TableHead>
                                    <TableHead>Delete</TableHead>
                                    <TableHead className="text-right"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Array(7).fill(0).map((_, index) => (
                                    <TableRow key={index} className="animate-pulse">
                                        <TableCell className="font-medium">
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </TableCell>
                                        <TableCell className="line-clamp-3">
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter></TableFooter>
                        </Table>
                    )

            }
        </div>
    )
}

export default History
