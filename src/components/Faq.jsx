import React, { useState } from 'react'
import { QUESTION } from './utils/helper'

function Faq() {
    const [faq , setFaq]=useState()
    const handleFaq=(index)=>{
        setFaq(faq===index?"":index)
    }
    return (
        <div className='max-w-[600px] mx-auto py-5'>
            <h1 className='text-center text-4xl'>FAQ</h1>
            {QUESTION.map((obj, i) => (
                <div key={i} className='border-2 p-3 border-gray-400 rounded-lg mt-4'>
                    <div onClick={()=>handleFaq(i)} className='flex justify-between items-center cursor-pointer'>
                        <h3 className='text-2xl font-medium'>{obj.que}</h3>
                        <button className='text-2xl'>{faq === i ? "-" : "+"}</button>
                    </div>
                    <div className={`${faq === i ? "max-h-32":"max-h-0"} overflow-hidden transition-all duration-500 ease-in-out`}>
                        <p>{obj.ans}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Faq