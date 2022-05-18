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

    //Copy clickText
    const handleClickCopy =()=>{
        navigator.clipboard.writeText(clickText);
    }

    //copy clickChange
    const handleCopyChange =()=>{
        navigator.clipboard.writeText(changeText);
    }

    //Remove Extra Spaces
    const removeSpaces =()=>{  
        setChangeText(changeText.split(/[ ]+/).join(" "));
    }

    //Handle Capitalize
    const handleCapitalize =()=>{  
        setChangeText(changeText.charAt(0).toUpperCase() + changeText.slice(1));
        setClickText(clickText.charAt(0).toUpperCase() + clickText.slice(1));
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
                    <p>{(clickText === '')?0:clickText.split(" ").length} words and {clickText.length} charecters</p>
                    <input className="form-control" id="myBox" />
                </div>
                <button className="btn btn-primary" onClick={handleClick} >Confirm</button>
                <button className="btn btn-primary" onClick={handleClickCopy}>Copy</button>
                
                
            </div> 

            {/*Grid for changing the label text on change*/}
            <div className="mb-6 card">
                <div className="mb-6">
                    <h2>On Change Functionality</h2>
                    <label className="form-label">{changeText}</label>
                    <p>{(changeText === '')?0:changeText.split(" ").length} words and {changeText.length} charecters</p>
                    <input className="form-control" id="myBox-change" onChange={handleOnChange} value={changeText} />
                    <button className="btn btn-primary" onClick={handleCopyChange}>Copy</button>
                </div>
            </div>
            </div>
            {/* adding global buttons */}
            <div className='global-buttons'>
                <button className="btn btn-primary sm-3" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary sm-3" onClick={handleLow}>Lower Case</button>
                <button className="btn btn-primary sm-3" onClick={handleUpper}>Upper Case</button>
                <button className="btn btn-primary sm-3" onClick={removeSpaces}>Remove Spaces</button>
                <button className="btn btn-primary sm-3" onClick={handleCapitalize}>Capitalize</button>
            </div>
        </div>
    )
}