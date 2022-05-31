import React, {useState, useEffect} from 'react';

function Third(props) {
  /**
  |--------------------------------------------------
  | A Variable for storing input of 3rd Component
  |--------------------------------------------------
  */
  const [thirdComp, setThirdComp] = useState("");

  /**
  |--------------------------------------------------
  | useEffect for updating the input values on load and after clicking of buttons
  |--------------------------------------------------
  */
  useEffect(() => {
    setThirdComp(props.update.thirdComp ?? "");
  },[props]);
  /**
  |--------------------------------------------------
  | Getting & Setting value of input on change
  |--------------------------------------------------
  */
  const getThirdComp = (event) => {
    setThirdComp(event.target.value);
  }
  /**
  |--------------------------------------------------
  | Updating the value of third component on Click
  |--------------------------------------------------
  */
  const handleClick = () => {
    props.updateValue(props.update.secondComp, thirdComp);
    props.showAlert("Value Updated!", "success");
  }
  /**
  |--------------------------------------------------
  | Reset Button Functionality
  |--------------------------------------------------
  */
  const reset = () => {
    props.updateValue(props.update.secondComp, '');
    props.showAlert("Value Updated!", "success");
  }

  return (
    <div className="col">
          <input type="text" className="form-control" onChange={getThirdComp} value={ thirdComp ?? ""} id="child-component-3"/>
          <button type="button" className="btn btn-primary" onClick={handleClick} >Update</button>
          <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div> 
  )
}

export default Third;
