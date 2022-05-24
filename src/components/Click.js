import React, {useState} from 'react';

export default function Click(props) {
    /**
    |--------------------------------------------------
    | Variable for storing data
    |--------------------------------------------------
    */
    const [text, setText] = useState('');
    /**
    |--------------------------------------------------
    | On Click function
    |--------------------------------------------------
    */
    const handleMode = ()=>{
        let inputText = document.getElementById('myBox').value;
            setText(inputText);
    }
    /**
    |--------------------------------------------------
    | Clear On Click 
    |--------------------------------------------------
    */
    const handleClear =()=>{
        setText('');
        props.showAlert('Text Cleared', 'success');
    }
    /**
    |--------------------------------------------------
    | Change to Lower Case
    |--------------------------------------------------
    */
    const handleLow =()=>{
        setText(text.toLowerCase());
        props.showAlert('Converted to lower case', 'success');
    }
    /**
    |--------------------------------------------------
    | Change to Upper Case
    |--------------------------------------------------
    */
    const handleUpper =()=>{
        setText(text.toUpperCase());
        props.showAlert('Converted to Upper case', 'success');
    }
    /**
    |--------------------------------------------------
    | Copy clickText
    |--------------------------------------------------
    */
    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied!', 'success');
    }
    /**
    |--------------------------------------------------
    | Remove Extra Spaces
    |--------------------------------------------------
    */
    const removeSpaces =()=>{  
        setText(text.split(/[ ]+/).join(" "));
        props.showAlert('Extra spaces removed', 'success');
    }
    /**
    |--------------------------------------------------
    | Handle Capitalize
    |--------------------------------------------------
    */
    const handleCapitalize =()=>{  
        setText(text.charAt(0).toUpperCase() + text.slice(1));
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
                    <label className="form-label">
                        <p>{text}</p>
                        <p className="card-text">{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
                    </label>
                    <textarea className="form-control" id="myBox"/>
                </div>                 
            </div> 
            {/* adding global buttons */}
            <div className='global-buttons'>
                <button className="btn btn-primary sm-3" onClick={handleMode} >Click</button>
                <button className="btn btn-primary sm-3" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary sm-3" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary sm-3" onClick={handleLow}>Lower Case</button>
                <button className="btn btn-primary sm-3" onClick={handleUpper}>Upper Case</button>
                <button className="btn btn-primary sm-3" onClick={removeSpaces}>Remove Spaces</button>
                <button className="btn btn-primary sm-3" onClick={handleCapitalize}>Capitalize</button>
            </div>
        </div>
    )
}