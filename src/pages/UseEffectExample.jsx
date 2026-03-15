import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {

    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)

    let getProducts=()=>{
        console.log("Product Found")
    }

    let getCategory=()=>{
        console.log("Category Found")
    }

    // useEffect(()=>{
    //     getProducts()
    // getCategory()
    // },[])   //One time call


    useEffect(()=>{
        getProducts()
    getCategory()
    },[count1])

    
  return (
    <div>
        <button onClick={()=>setCount1(count1+1)} className='bg-red-300 p-3 m-3'>Change Count1 {count1}</button>

        <button onClick={()=>setCount2(count2+1)} className='bg-red-300 p-3 m-3'>Change Count2 {count2}</button>
    </div>
  )
}
