import React, {useState, useEffect, memo} from 'react';
function Second(props) {
  /**
  |--------------------------------------------------
  | A Variable for storing input of 2nd Component
  |--------------------------------------------------
  */
  const [secondComp, setSecondComp] = useState("");

  /**
  |--------------------------------------------------
  | useEffect for updating the input values on load and clicking of buttons
  |--------------------------------------------------
  */
  
  useEffect(() => {
    setSecondComp(props.update.secondComp ?? "");
  },[props]);
  /**
  |--------------------------------------------------
  | Getting & Setting value of input on change
  |--------------------------------------------------
  */
  const getSecondComp = (event) => {
    setSecondComp(event.target.value);
  }
  /**
  |--------------------------------------------------
  | Updating the value of third component on Click
  |--------------------------------------------------
  */
  const handleClick = () => {
    props.updateValue(secondComp, props.update.thirdComp);
    props.showAlert("Value Updated!", "success");
  }
  /**
  |--------------------------------------------------
  | Reset Button Functionality
  |--------------------------------------------------
  */
  const reset = () => {
    props.updateValue('', props.update.thirdComp);
    props.showAlert("Value Updated!", "success");
  }
  return (   
      <div className="col">          
          <input type="text" className="form-control" onChange={getSecondComp} value={secondComp} id="child-component-2" />
          <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
          <button className="btn btn-primary" onClick={reset}>Reset</button>          
      </div>
  )
}

export default memo(Second);
