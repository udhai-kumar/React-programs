import React, { useState } from 'react'

export const Second = () => {
    const[large , setLarge] = useState({
        number:[],
        output:""
    })

    const handleChange = (e) => {
        let target = e.target.value
        let value=target.split(',')
        //console.log(value)
        setLarge((prev) => ({
            ...prev,
            number:value
           
        }))
    }

    const max = () => {
        let a=large.number
        let n= a.length;
        a.sort(function(a,b){return a-b;});
        let max2 = 0;

        for (let i = n - 2; i >= 0; i--) {
             if (a[i] !== a[n - 1]) {
              max2 = a[i];
              break;
            }
          }   
     
    setLarge((prev) => ({
        ...prev,
        output:max2
    }))
  }
    
    return (
        <div>
            <div className="card1 my-auto mx-auto">
                <div className="obj10">
                    <h3>second largest </h3>
                    <input type="text" name="number" onChange={handleChange} placeholder="Enter the array" value={large.number}/><br />
                    <button className='btn btn-sm btn-warning my-2' onClick={max}>Find</button><br />
                    <input type="text" value={large.output} name="output" readOnly/>
                </div>
            </div>
        </div>
    )
}
