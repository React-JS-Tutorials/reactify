import React, {useState, memo} from 'react';

function First(props) {
  /**
  |--------------------------------------------------
  | Variables for storing inputs & values of first component
  |--------------------------------------------------
  */
  const [secondComp, setSecondComp] = useState("");
  const [thirdComp, setThirdComp] = useState("");

  const [check2, setCheck2] = useState(props.update.secondComp);
  const data2 = props.update.secondComp;
  if(check2 !== data2){ 
    setSecondComp(data2)
    setCheck2(props.update.secondComp)
  }

  const [check3, setCheck3] = useState(props.update.thirdComp);
  const data3 = props.update.thirdComp;
  if(check3 !== data3){ 
    setThirdComp(data3)
    setCheck3(props.update.thirdComp)
  }
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
        <input type="text" className="form-control" name="secondComp" onChange={getSecondComp} value={secondComp} />
      </div>
      <div className="col-12">
        <label className="form-label" htmlFor="component-3">Value for Comp 3</label>
        <input type="text" className="form-control" name="thirdComp" onChange={getThirdComp} value={thirdComp}/>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </div>
  )
}

export default memo(First)
