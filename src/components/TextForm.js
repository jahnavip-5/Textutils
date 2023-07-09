import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    //setText('some text');
    const handleUpClick = () =>{
    //  console.log('uppercase'+text);
    //  setText("Clicked on handleUpClick");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Uppercase","success")
    }
    const handleClear =() =>{
        setText("");
    }
    const handleLoClick = () =>{
          let newtext=text.toLowerCase();
            setText(newtext);
            props.showAlert("Lowercase","success")
        }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const handleCopy=()=>{
        navigator.clipboard.writeText(text);

      }

      const remextraspaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
      }

    return (
    <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(34,30,30)':'white', border:props.mode==='dark'?'1px solid white':'1px solid black', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary m-1" onClick={handleClear} >Clear Text</button>
                <button className="btn btn-primary m-1" onClick={speak} >Text to Speech</button>
                <button className="btn btn-primary m-1" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary m-1" onClick={remextraspaces} >Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes to read</p>
               {/* 125 words->1 minutes  1 word->1/125=0.008 minutes */}
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something to preview it here'}</p>
            </div>
    </>
  )
}
