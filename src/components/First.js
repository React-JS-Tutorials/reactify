import React, {useState, useEffect} from 'react';

function First(props) {
  /**
  |--------------------------------------------------
  | Variables for storing inputs & values of first component
  |--------------------------------------------------
  */
  const [secondComp, setSecondComp] = useState("");
  const [thirdComp, setThirdComp] = useState("");
  /**
  |--------------------------------------------------
  | useEffect for updating the input values on load and clicking of buttons
  |--------------------------------------------------
  */
  useEffect(() => {
    setSecondComp(props.update.secondComp ?? "");
    setThirdComp(props.update.thirdComp ?? "");
  },[props.update.secondComp, props.update.thirdComp],[]);
  /**
  |--------------------------------------------------
  | Getting & Setting value of inputs on change
  |--------------------------------------------------
  */
  const getSecondComp = (event) => {
    setSecondComp(event.target.value);   
  }  
  const getThirdComp = (event) => {
    setThirdComp(event.target.value);
  }
  /**
  |--------------------------------------------------
  | Updating the value of inputs on Click
  |--------------------------------------------------
  */
  const handleClick = () => {
    props.updateValue(secondComp, thirdComp);
    props.showAlert("Value Updated!", "success");  
  }
return (    
    <div className="col">
      <div className="col-12">
        <label className="form-label" htmlFor="component-2">Value for Comp 2</label>
        <input type="text" className="form-control" id="component-2" onChange={getSecondComp} value={ secondComp} />
      </div>
      <div className="col-12">
        <label className="form-label" htmlFor="component-3">Value for Comp 3</label>
        <input type="text" className="form-control" id="component-3" onChange={getThirdComp} value={ thirdComp}/>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </div>
  )
}

export default First
