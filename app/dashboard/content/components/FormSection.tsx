import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
interface PROPS{
    filterData?:TEMPLATE;
}
function FormSection({filterData}:PROPS) {
    // console.log("form data",filterData)
  return (
    <div>
       <Image alt='icon' src={filterData?.icon} width={70} height={70} />   
    </div>
  )
}

export default FormSection