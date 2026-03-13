import React, { useState } from 'react'
import Header from '../components/common/Header'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { FaqList } from '../Data/FaqList'

export default function Accordion() {

    let [openQuestionId, setOpenQuestionId] = useState(FaqList[0].id)  //1

    return (
        <div>
            
            <section className='py-10'>
                <h1 className='text-4xl font-bold text-center'>Accordion</h1>
                <div className='max-w-[1000px] m-auto mt-5'>

                    {FaqList.map((obj, index) => {
                        return (
                            <div kay={index} className='border-1 border-[#ccc] mb-3'>
                                <h3 onClick={() => setOpenQuestionId(obj.id == openQuestionId ? 0 : obj.id)} className='cursor-pointer relative p-2 text-xl bg-yellow-500 text-white font-bold'>{obj.id}. {obj.question}
                                    <span className='absolute right-[10px] top-[10px]'>

                                        {
                                            openQuestionId == obj.id ? <FaMinus /> : <FaPlus />
                                        }


                                    </span>
                                </h3>
                                <div className={`p-3 ${openQuestionId == obj.id ? 'block' : 'hidden'}`}>
                                    {obj.answer}
                                </div>
                            </div>
                        )
                    })}


                </div>


                <h2 className='text-2xl font-bold text-center'>Another Method with Component</h2>

                <div className='max-w-[1000px] m-auto mt-5'>
                    {FaqList.map((obj, index) =>
                        <FaqItem key={index} data={obj} />
                    )
                    }
                </div>
            </section>
        </div>
    )
}

function FaqItem({ data }) {
    let { id, question, answer } = data
    let [openQuestionId, setOpenQuestionId] = useState(0)
    return (
        <div className='border-1 border-[#ccc] mb-3'>
            <h3 onClick={() => setOpenQuestionId(id == openQuestionId ? 0 : id)} className='cursor-pointer relative p-2 text-xl bg-yellow-500 text-white font-bold'>
                {question} <span className='absolute right-[10px] top-[10px]'>

                    {
                        openQuestionId == id ? <FaMinus /> : <FaPlus />
                    }


                </span>
            </h3>
            <div className={`p-3 ${openQuestionId == id ? "block" : "hidden"} `}>
                ${answer}
            </div>
        </div>
    )
}
