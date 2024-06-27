"use client"
import React, { useState } from 'react'
import { FORM, TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
interface PROPS {
    filterData: any;
    userFormInput: any,
    loading:any
}
function FormSection({ filterData, userFormInput,loading }: PROPS) {
    const [formData, setFormData] = useState<any>()
    const HandleChangeEvent = (event: any) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })

    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData)
        // console.log(formData)
    }
    // console.log("form data",filterData)
    return (
        <div className=' border p-6 w-full mt-4'>
            <Image alt='icon' src={filterData?.icon} width={70} height={70} />
            <h1 className=' font-bold text-xl '>{filterData?.name}</h1>
            <p>{filterData?.desc}</p>
            <form onSubmit={onSubmit}>
                {
                    filterData?.form?.map((item: FORM, index: number) => {
                        return (<div key={index}>
                            <label className=' font-semibold m-2 '>{item?.label}</label>
                            {
                                item.field == "input" ? <Input name={item?.name} required={item?.required} onChange={HandleChangeEvent} /> :
                                    item.field == "textarea" ?
                                        <Textarea name={item?.name} required={item?.required} onChange={HandleChangeEvent} /> : null
                            }

                        </div>)
                    })
                }
                <Button className=' w-full h-[60px] p-2 mt-4' disabled={loading}>
                    {loading&&<Loader className=' animate-spin'/>}
                    Generate Content</Button>
            </form>
        </div>
    )
}

export default FormSection