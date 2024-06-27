import React from 'react'
import FormSection from '../components/FormSection'
import OutputSection from '../components/OutputSection'
import { Templates } from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
export interface PROPS{
    params:{

        "template-slug":string,
    }
}
function CreateNewConten(params:PROPS) {
    const filterData:TEMPLATE|undefined=Templates?.find((item)=>{
       return item.slug==params.params['template-slug']
    })
    // console.log("filterdata",filterData+"birkam")
//    console.log(params.params['template-slug'])
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5'>
         {/* form section */}
         <FormSection filterData={filterData}/>
          {/* Output section */}
          <OutputSection/>
    </div>
  )
}

export default CreateNewConten