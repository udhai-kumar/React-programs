import React, { useState } from 'react'

const Reverse = () => {
    const [reverse, setReverse] = useState({
        string: "",
        reversestr: ""
    });
    // const [result,setResult] = useState("");

    const handleChange = (e) => {
        const value = e.target.value
        setReverse((prev) => ({
            ...prev,
            string: value
        }));
    }

    const reverseString = () => {
        let str=reverse.string
        let reversed_string = ''
        for (let i = str.length - 1; i >= 0; i--) {
            reversed_string += str[i];
        }
        setReverse ((val) => ({
            ...val,
            reversestr:reversed_string
        }))
    }


return (
    <>
        <div className="card1 mx-auto my-auto ">
            <div className="obj1 ">
                <h3>Reverse String</h3>
                <input type="text" value={reverse.string} name="string" onChange={handleChange} placeholder="Enter the String"/><br />
                <button className='btn btn-sm btn-warning my-2' onClick={reverseString}>Reverse</button><br />
                <input type="text" id="revans" name="reversestr" value={reverse.reversestr} readOnly />
            </div>
        </div>
    </>
)
}

export default Reverse