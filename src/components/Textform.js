import React, {useState} from 'react';

export default function Textform(props) {
    /**
    |--------------------------------------------------
    | Variable for storing data before and after click
    |--------------------------------------------------
    */
    const [clickText, setClickText] = useState('');
    /**
    |--------------------------------------------------
    | Variable for storing data before and after change
    |--------------------------------------------------
    */
    const [changeText, setChangeText] = useState('');
    /**
    |--------------------------------------------------
    | On Click function
    |--------------------------------------------------
    */
    const handleClick = ()=>{
        let inputText = document.getElementById('myBox').value;
        setClickText(inputText);
    }
    /**
    |--------------------------------------------------
    | On Click function
    |--------------------------------------------------
    */
    const handleOnChange = (event)=>{
        setChangeText(event.target.value);
    }
    /**
    |--------------------------------------------------
    | Clear On Click 
    |--------------------------------------------------
    */
    const handleClear =()=>{
        setChangeText('');
        setClickText('');
        props.showAlert('Text Cleared', 'success');
    }
    /**
    |--------------------------------------------------
    | Change to Lower Case
    |--------------------------------------------------
    */
    const handleLow =()=>{
        setChangeText(changeText.toLowerCase());
        setClickText(clickText.toLowerCase());
        props.showAlert('Converted to lower case', 'success');
    }
    /**
    |--------------------------------------------------
    | Change to Upper Case
    |--------------------------------------------------
    */
    const handleUpper =()=>{
        setChangeText(changeText.toUpperCase());
        setClickText(clickText.toUpperCase());
        props.showAlert('Converted to Upper case', 'success');
    }
    /**
    |--------------------------------------------------
    | Copy clickText
    |--------------------------------------------------
    */
    const handleClickCopy =()=>{
        navigator.clipboard.writeText(clickText);
        props.showAlert('Text Copied!', 'success');
    }
    /**
    |--------------------------------------------------
    | copy clickChange
    |--------------------------------------------------
    */
    const handleCopyChange =()=>{
        navigator.clipboard.writeText(changeText);
        props.showAlert('Text Copied', 'success');
    }
    /**
    |--------------------------------------------------
    | Remove Extra Spaces
    |--------------------------------------------------
    */
    const removeSpaces =()=>{  
        setChangeText(changeText.split(/[ ]+/).join(" "));
        setClickText(clickText.split(/[ ]+/).join(" "));
        props.showAlert('Extra spaces removed', 'success');
    }
    /**
    |--------------------------------------------------
    | Handle Capitalize
    |--------------------------------------------------
    */
    const handleCapitalize =()=>{  
        setChangeText.toLowerCase();
        setClickText.toLowerCase();
        setChangeText(changeText.charAt(0).toUpperCase() + changeText.slice(1));
        setClickText(clickText.charAt(0).toUpperCase() + clickText.slice(1));
        props.showAlert('Text Capitalized', 'success');
    }
    /**
    |--------------------------------------------------
    | The body of the page to be returned
    |--------------------------------------------------
    */
    return (
        
        <div className="container">
            {/*Grid for changing the label text on button click*/}
            <div className="mb-6 card">
                <div className="mb-6 card-body">                    
                    <h4>On Click Functionality</h4>
                    <label className="form-label">{clickText}</label>
                    <p className="card-text">{clickText.split(" ").filter((element)=>{return element.length!==0}).length} words and {clickText.length} charecters</p>
                    <input className="form-control" id="myBox" />
                </div>
                <button className="btn btn-primary" onClick={handleClick} >Confirm</button>
                <button className="btn btn-primary" onClick={handleClickCopy}>Copy</button>
                
                
            </div> 

            {/*Grid for changing the label text on change*/}
            <div className="mb-6 card">
                <div className="mb-6 card-body">
                    <h4>On Change Functionality</h4>
                    <label className="form-label">{changeText}</label>
                    <p className="card-text">{changeText.split(" ").filter((element)=>{return element.length!==0}).length} words and {changeText.length} charecters</p>
                    <input className="form-control" id="myBox-change" onChange={handleOnChange} value={changeText} />
                    <button className="btn btn-primary" onClick={handleCopyChange}>Copy</button>
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