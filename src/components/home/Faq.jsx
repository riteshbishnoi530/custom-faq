import React, { useState } from 'react'
import { FAQ_LIST} from '../../utils/helper'

function Faq() {
    const [faq , setFaq]=useState()
    const handleFaq=(index)=>{
        setFaq(faq===index?"":index)
    }
    return (
        <div className='max-w-[600px] mx-auto py-5'>
            <h1 className='text-center text-4xl'>FAQ</h1>
            {FAQ_LIST.map((obj, i) => (
                <div key={i} className='border-2 p-3 border-gray-400 rounded-lg mt-4'>
                    <div onClick={()=>handleFaq(i)} className='flex justify-between items-center cursor-pointer'>
                        <h3 className='text-2xl font-medium'>{obj.title}</h3>
                        <div className={`text-2xl size-5 items-center pb-1 flex justify-center transition-all duration-300 ease-in-out ${ faq === i ? "rotate-0" : "-rotate-90"
                            }`}>{faq === i ? "-" : "+"}</div>
                    </div>
                    <div className={`${faq === i ? "max-h-32":"max-h-0"} overflow-hidden transition-all duration-500 ease-in-out`}>
                        <p>{obj.description}</p>
                    </div>
                </div>
            ))}

            <div>
                
            </div>
        </div>
    )
}

export default Faq