import React, {useState} from 'react'

export default function Textform() {
    const handleClick = ()=>{
        let inputText = document.getElementById('myBox').value;
        setText(inputText);
        document.getElementById('onClick-text').innerHTML = text;
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        let inputText = document.getElementById('myBox-change').value;
        setText(inputText);
        document.getElementById('onChange-text').innerHTML = text;
    }
    const [text, setText] = useState('Enter the text here');
    return (
        <div>
            <div className="mb-6">
                <div className="mb-6">
                    <label id="onClick-text" className="form-label"></label>
                    <textarea className="form-control" id="myBox" rows="1"></textarea>
                </div>
                <button className="btn btn-primary mb-3" onClick={handleClick}>Confirm</button>
            </div>  
            <div className="mb-6">
                <div className="mb-6">
                    <label id="onChange-text" className="form-label"></label>
                    <textarea className="form-control" id="myBox-change" rows="1" onClick={handleOnChange}></textarea>
                </div>
            </div>   
        </div>
    )
}