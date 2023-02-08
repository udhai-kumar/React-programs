import React,{useState} from 'react'

export const Prime = () => {
    const [prime,setPrime] = useState('');
    const handleprime = (e) =>{
setPrime(e.target.value);
    }
    const check = () =>{

        let count = 0;
        for (let i = 1; i <= prime; i++) {
            if (prime % i === 0) {
                count++;
            }
        }
            if (count === 2) {
                alert("it is prime number")
            }
            else if (count === 1) {
                alert("it is neither prime or compoiste number")
            }
            else{
                alert("it is not prime number")
            }
            setPrime("")

        }
    


  return (
    <div>
        <div className="card1 mx-auto my-auto">
                <div className="obj6">
                    <h3>prime or not</h3>
                    <input type="text" value={prime} placeholder="Enter the number" onChange={handleprime}/><br/>
                    <button className='btn btn-sm btn-warning mt-2' onClick={check}>Check</button><br/>
                </div>
            </div>
    </div>
  )
}