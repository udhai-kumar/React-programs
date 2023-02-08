import React from 'react'
import { useState } from 'react'

export const Sum = () => {
    const[number , setNumber] = useState({
        num:[],
        result:0
    })

    const handleChange = (e) => {
       const target =e.target.value;
       const seperate = ',';
       let value = target.split(seperate)//convert the number separete by comma to array

       setNumber ((prev) => ({
          ...prev,
          num:value
       }))
    }
 const sums = () => {
    const num = number.num;
    const value = num.reduce((first,sum) => (Number(first)+Number(sum)))

    setNumber((prev) =>({
        ...prev,
        result: value    }))
 }
    
    

  return (
    <div>
        <div className="card1 mx-auto my-auto">
                <div className="obj7">
                    <h3>sum of array</h3>
                    <input type="text" name="num" onChange={handleChange} placeholder="Enter the array" value={number.num}/><br/>
                    <button className='btn btn-sm btn-warning my-2' onClick={sums}>Sum</button><br/>
                    <input type="text" name="result" value={number.result} readOnly/>
                </div>
            </div>

    </div>
  )
}
