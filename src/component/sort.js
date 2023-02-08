import React from 'react'
import { useState } from 'react'

export const Sort = () => {
    const [sorting, setSorting] = useState({
        num1:[],
        output:[]
    })
    
    const handleChange = (e) => {
     const target = e.target.value;
     const separate = ',';
     const value=target.split(separate)

     setSorting ((prev) => ({
        ...prev,
        num1:value
     }))
    }

    const sorts = () => {
        let result = sorting.num1
        result.sort(function (a, b) { return a - b });
        setSorting((prev) => ({
            ...prev,
            output:result
        }))
    }

 
    return (
        <div>
            <div className ="card1 mx-auto my-auto">
                <div className="obj8">
                    <h3>sort an array</h3>
                    <input type="text" name="num1" value={sorting.num1} placeholder="Enter the Array" onChange={handleChange}/><br />
                    <button className='btn btn-sm btn-warning my-2' onClick={sorts}>Sort</button><br/>
                    <input type="text" name="result" value={sorting.output} readOnly/>
                </div>
            </div>

        </div>
    )
}
