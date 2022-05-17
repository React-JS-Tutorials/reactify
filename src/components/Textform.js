import React, {useState} from 'react';

export default function Textform() {
    //Variable for storing data before and after click
    const [clickText, setClickText] = useState('');

    //Variable for storing data before and after change
    const [changeText, setChangeText] = useState('');

    //On Click function
    const handleClick = ()=>{
        let inputText = document.getElementById('myBox').value;
        setClickText(inputText);
    }
    //On Click function
    const handleOnChange = (event)=>{
        setChangeText(event.target.value);
    }

    //Clear On Click 
    const handleClear =()=>{
        setChangeText('');
        setClickText('');
    }

    //Change to Lower Case
    const handleLow =()=>{
        setChangeText(changeText.toLowerCase());
        setClickText(clickText.toLowerCase());
    }

    //Change to Upper Case
    const handleUpper =()=>{
        setChangeText(changeText.toUpperCase());
        setClickText(clickText.toUpperCase());
    }

    //The body of the page to be returned
    return (
        
        <div className="container">
            <div className='cards'>
            {/*Grid for changing the label text on button click*/}
            <div className="mb-6 card">
                <div className="mb-6">
                    <h2>On Click Functionality</h2>
                    <label className="form-label">{clickText}</label>
                    <input className="form-control" id="myBox" />
                </div>
                <button className="btn btn-primary mb-3" onClick={handleClick} >Confirm</button>
                <h1>Text Summery</h1>
                <p>{clickText.split(" ").length} words and {clickText.length} charecters</p>
            </div> 

            {/*Grid for changing the label text on change*/}
            <div className="mb-6 card">
                <div className="mb-6">
                    <h2>On Change Functionality</h2>
                    <label className="form-label">{changeText}</label>
                    <input className="form-control" id="myBox-change" onChange={handleOnChange} value={changeText} />
                    <h1>Text Summery</h1>
                    <p>{changeText.split(" ").length} words and {changeText.length} charecters</p>
                </div>
            </div>
            </div>
            {/* adding global buttons */}
            <div className='global-buttons'>
                <button className="btn btn-primary mb-3" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mb-3" onClick={handleLow}>Lower Case</button>
                <button className="btn btn-primary mb-3" onClick={handleUpper}>Upper Case</button>
            </div>
        </div>
    )
}