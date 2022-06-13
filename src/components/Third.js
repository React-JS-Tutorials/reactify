import React, {useState, memo} from 'react';

function Third(props) {
  /**
  |--------------------------------------------------
  | A Variable for storing input of 3rd Component
  |--------------------------------------------------
  */
  const [thirdComp, setThirdComp] = useState("");
  const [check3, setCheck3] = useState(props.update.thirdComp);
  const data3 = props.update.thirdComp;
  if(check3 !== data3){ 
    setThirdComp(data3)
    setCheck3(props.update.thirdComp)
  }
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
          <input type="text" className="form-control" onChange={getThirdComp} value={ thirdComp } id="child-component-3"/>
          <button type="button" className="btn btn-primary" onClick={handleClick} >Update</button>
          <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div> 
  )
}

export default memo(Third);
