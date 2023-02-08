import React, {useState} from 'react';

 const Character = () => {
    const[char , setChar] = useState({
        fullname:"",
        target :"",
        count: 0
    });
    
    const handleChange = (e) => {
        const{name , value} =e.target

        setChar((prev) => ({
            ...prev,
            [name]:value
    }));
    }

    const find = () => {
        let str=char.fullname;
        let y=char.target;
        let count=0;
        for(let i=0;i<str.length;i++){
        if(str[i] === y){
            count++;
        }
    }
         setChar((val)=>({
            ...val,
            count:count
         }))
    }

  return (
    <div>
        <div className="card1 my-auto mx-auto">
                <div className="obj11">
                    <h3> count character </h3>
                   <div> <input type="text" id="char1" name="fullname" placeholder="Enter the string" onChange={handleChange} value={char.fullname}/></div>
                  <div className='mt-2'> <input type="text" id="char" name="target" placeholder='target string' onChange={handleChange} value={char.target}/><br/></div>
                    <button className='btn btn-sm btn-warning my-2' onClick={find} >Find</button><br/>
                    <input type="text"  id="charans" value={char.count} name="count" readOnly/>
                </div>
            </div>
    </div>
  )
}
export default Character
