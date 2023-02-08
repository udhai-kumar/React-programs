import React, { useState } from 'react'

export const Removestring = () => {
    const [string, setString] = useState({
        str: "",
        target: "",
        output: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setString((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const remove = () => {

        let str2 = string.str.split("");
        let str3;
        str3 = str2.filter(e => e !== string.target);
        str3=str3.reduce((prev,current) => prev+current );
       setString ((prev) => ({
        ...prev,
        output:str3
       }))
    }
    return (
        <div>
            <div className="card1 mx-auto my-auto">
                <div className="obj3">
                    <h3>remove string</h3>
                   <div><input type="text" name="str" onChange={handleChange} value={string.str} placeholder="enter the string"/></div> 
                <div className='mt-2'><input type="text" name="target" placeholder='target string' onChange={handleChange} value={string.target} /><br /></div>
                    <button className='btn btn-sm btn-warning my-2' onClick={remove}>Remove string</button><br />
                    <input type="text" name="output"  value={string.output} readOnly />
                </div>
            </div>
        </div>
    )
}
