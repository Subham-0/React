import React, { useState } from 'react'

const ReactFormExample = () => {
    const [name,setName] = useState("")
    const [pswd,setPswd] = useState("")
    function handleChange(e){
      if(e.target.name == 'firstname'){
        const capName =(e.target.value).toUpperCase()
        setName(capName); 
      }
      else{
        setPswd(e.target.value)
      }
    }
   
        return (
        <>
        <p><b style={{color:'green'}}>controlled the First name as only uppercase</b></p>
        {/* Controlled input: React controls this value using state */}
            <form className='ReactFormExample'>
                <label>FirstName : </label><br />
                <input type="text" name='firstname' value={name} onChange={handleChange}/><br />
                <label>Password : </label><br />
                <input type="text" name='password' value={pswd} onChange={handleChange}/><br />
            </form>
        </>
    )
}

export default ReactFormExample