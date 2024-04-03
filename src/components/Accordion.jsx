import React from 'react'
import { useState } from 'react'
const Accordion = ({ answer, title }) => {
    const [accordionOpen, setAccordion] = useState(false)
    return (
        <div className='py-2'>
            <button onClick={() => setAccordion(!accordionOpen)} className='flex justify-between w-full'>
                <span className='font-bold'>{title}</span>
                {
                    accordionOpen ? <span className='font-bold'>-</span> : <span className='font-bold'>+</span>
                }

            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
                }`}>
                <div className='overflow-hidden'>{answer}</div>
            </div>
        </div >
    )
}

export default Accordion