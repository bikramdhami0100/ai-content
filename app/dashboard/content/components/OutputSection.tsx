"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
interface Props{
  aiOutPut:any
}
function OutputSection({aiOutPut}:Props) {
  const editorRef=useRef<any>()
  console.log("first",aiOutPut)
  useEffect(()=>{
   const editorInstance=editorRef.current.getInstance();
   editorInstance.setMarkdown(aiOutPut)
  },[aiOutPut])
  return (
    <div>
      <div className=' flex justify-between items-center border p-3'>
          <h1 className=' text-xl font-bold'>Your Result</h1>
          <div className='flex gap-2 bg-primary text-white  p-3 rounded-md'>
             <Copy/> Copy
          </div>
      </div>
      <Editor
      ref={editorRef}
        initialValue="Your result will be appear here"
        // previewStyle="vertical"
        height="600px"
        // initialEditType="WYSIWYG"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={(value:any)=>console.log("this is editor",editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection