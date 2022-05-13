import React, {useState} from 'react';

export default function Textform() {
    //Variable for storing data before and after click
    const [clickText, setClickText] = useState('');

    //Variable for storing data before and after change
    const [changeText, setChangeText] = useState('');

    //On Click function
    const handleClick = (event)=>{
        let inputText = document.getElementById('myBox').value;
        // let inputText = this.state = {value: event.target.value};
        setClickText(inputText);
    }

    //On Click function
    const handleOnChange = (event)=>{
        setChangeText(event.target.value);
    }

    //The body of the page to be returned
    return (
        <div className="container">
            {/*Grid for changing the label text on button click*/}
            <div className="mb-6 card">
                <div className="mb-6">
                    <h2>On Click Functionality</h2>
                    <label className="form-label">{clickText}</label>
                    <input className="form-control" id="myBox" />
                </div>
                <button className="btn btn-primary mb-3" onClick={handleClick}>Confirm</button>
            </div> 

            {/*Grid for changing the label text on change*/}
            <div className="mb-6 card">
                <div className="mb-6">
                    <h2>On Change Functionality</h2>
                    <label className="form-label">{changeText}</label>
                    <input className="form-control" id="myBox-change" onChange={handleOnChange} />
                </div>
            </div>   
        </div>
    )
}