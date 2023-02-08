import React,{useState} from 'react'

 const Palindrome = () => {
        const [palindro, setPalindro] = useState("")
    
        const handleChange = (e) => {
            const value = e.target.value
            setPalindro(value)
        }
    let reversed_string = "";
    const palin = () =>{
    for(let i=palindro.length-1;i>=0;i--){
        reversed_string+=palindro[i];
            }
      
       if(reversed_string===palindro){
          alert(`the given string is palindrome`);
        }
        else{
           alert(`the given string is not palindrome`);
        }
    }

    return (
        <div>
            <div className="card1 mx-auto my-auto ">
                <div className="obj2">
                    <h3>palindrome or not</h3>
                    <input type="text" id="getstr" name="content" placeholder="Enter the String" onChange={handleChange} value={palindro}
                    /><br />
                    <button className='btn btn-sm btn-warning mt-2' onClick={palin}>Check</button><br />
                </div>
            </div>
        </div>
    )
}
export default Palindrome
