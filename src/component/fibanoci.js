import React,{useState} from 'react'

export const Fibanocci = () => {

const [num,setNum] = useState({
    number:"",
    output:[]
});

const handleNum = (e) =>{
    const value = e.target.value
    setNum((Prev) =>({
        ...Prev,
        number:value
    }))
}
 
const fibanocci = () =>{
    let a = 0;
     let b = 1;
     let temp;
     let result = []
     for (let i = 1; i <= num.number; i++) {
        result.push(a);
         temp = a + b;
         a = b;
         b = temp;
     }
     setNum((Prev)=>({
        ...Prev,
        output:result
     }))

    setNum((Prev) =>({
        ...Prev,
        number:""
    }))
}

  return (
    <div>
         <div className="card1 mx-auto my-auto">
                <div className="obj9">
                    <h3>fibanocci series</h3>
                    <input type="text" name="number" value={num.number} placeholder="enter the number" onChange={handleNum} /><br/>
                    <button className='btn btn-sm btn-warning mt-2' onClick={fibanocci} >Generate</button><br/>
                    <textarea rows={2} cols={25} name="output" style={{marginTop:"5px"}} value={num.output} readOnly/>
                </div>
            </div>
           
    </div>
  )
}
