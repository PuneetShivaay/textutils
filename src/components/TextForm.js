import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppercaseClick = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to Uppercase", "success")

  };

  const handlelowercaseClick = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to Lowercase", "success")

  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is Cpoied to Clipboard", "success")

  }
  
  const handleExtraSpace = () => {
    let exrtaSpaceText = text.split(/[ ]+/);
    setText(exrtaSpaceText.join(" "))
    props.showAlert("Removed Extra Space", "success")


  }


  const handleOnChange = (event) => {
   setText(event.target.value);
  };


  const [text, setText] = useState("Remove this to Enter Your Text Here");

  return (
    <>
      <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myTextBox" rows="8" />
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUppercaseClick}>Convert to Uppercase </button>
      <button className="btn btn-primary mx-1" onClick={handlelowercaseClick}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text to ClipBoard </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space </button>


      </div>
      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2><b>Your text summary</b></h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Word(s) and <b> {text.length} </b>Characters</p>
        <p>{0.08 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}
