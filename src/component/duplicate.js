import React,{useState} from 'react'

export const Duplicates = () => {
   const[check , setCheck] =useState({
    string:[],
    output:[]
   })

   const handleChange = (e) => {
     const target=e.target.value;
     const separate=',';
     let value=target.split(separate);
     setCheck((prev) => ({
        ...prev,
        string:value
     }))
   }
   
   let arr=[]
   const dupli =() =>{
        
        if(check.string.length===1){
            let num=String(check.string)
             for (let i = 0; i < num.length; i++) {
                 if (!arr.includes(num[i])) {
                     arr.push(num[i]);
                      
                 }
         }
         arr=arr.reduce((current , value) => current+value)
        
    
}
    else{
        arr= check.string.filter((item,
        index) => check.string.indexOf(item) === index);
    }

    
    setCheck((prev) =>({
        ...prev,
        output:arr
    }))
}
    
   
    return (
        <div>
            <div className="card1 mx-auto my-auto">
                <div className="obj5">
                    <h3>Remove Duplicate</h3>
                    <input type="text" name="string" placeholder="Enter the string" onChange={handleChange} value={check.string}/><br />
                    <button className='btn btn-sm btn-warning my-2' onClick={dupli} >Remove </button><br />
                    <input type="text" name="output" value={check.output} readOnly />
                </div>
            </div>
        </div>
    )
}