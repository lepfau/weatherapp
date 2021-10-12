import React, {useState} from 'react'

export default function City(props) {

const [input, setInput] = useState("")
const { handleSubmit } = props

 const handleChange = (event) => {
setInput(event.target.value)
 }   

 const resetSubmit = (event, input) => {
     handleSubmit(event, input);
     setInput("")
 }
    
    return (
        <form onSubmit={(event) => resetSubmit(event, input)  }>
            <label htmlFor="city">City name</label>
            <input id='city' onChange={(e) => handleChange(e)} type="text" value={input}></input>
        </form>
    )
}
