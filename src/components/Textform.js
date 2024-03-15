import React,{useState}  from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  
  // text="new twxt" wrong\
  // setText("new text")
  const[text,setText]=useState('Enter text here');
  const handleClick=()=>{
    // console.log("Uppercase was clicked"+text)
  // setText("you hAVE cLICKED ON Uppercase")
  let newText = text.toUpperCase()
  setText(newText)
  props.showalert("Text in uppercase","success")
}
const handleclick=()=>{
  // console.log("Uppercase was clicked"+text)
// setText("you hAVE cLICKED ON Uppercase")
let newText = text.toLowerCase()
setText(newText)
props.showalert("Text in lowercase","success")
}
const handlecopy=()=>{
  // console.log("Uppercase was clicked"+text)
// setText("you hAVE cLICKED ON Uppercase")
    // let text =document.getElementById("my-box");
    // text.ariaSelected();
    // navigator.clipboard.writeText(text.value)
   var text = document.getElementById("my-box");

  // Select the text field
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied","success")

    // Alert the copied text
    // alert("Copied the text: " + text.value);

}
    
  const handleOnchange=(event)=>{
    console.log("On Change")
    setText(event.target.value);
  }
 
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
          <div className="mb-3">
                
            
            <textarea className="form-control"   value={text} onChange={handleOnchange} id="my-box" rows="8"    style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'black'}}  ></textarea>
          </div>
          
          <button type="button" className="btn btn-success mx-2" onClick={handleClick}>Convert To Uppercase</button>
          <button type="button" className="btn btn-success mx-2" onClick={handleclick} >Convert To lowercase</button>
          <button type="button" className="btn btn-success mx-2" onClick={handlecopy} >Copy Text</button>
    </div>
    <div className="container" my-3  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      {/* <p>{text.trim().split(" ").length} word {text.length} characters</p> */}
      <p>{(text.split(" ").length-1)*0.008} Reading Time In Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to Preview it here"}</p>


    </div>

    </>
    
  )
}

