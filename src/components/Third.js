import React, {useState, useEffect} from 'react';

function Third(props) {
  
  const [thirdComp, setThirdComp] = useState("");

  useEffect(() => {
    let count = 0;
    setThirdComp(props.update.thirdComp ?? "");
    if(count > 0){
      props.showAlert('Value Updated!','success');
      count = count + 1;
    }
  },[props]);
  const getThirdComp = (event) => {
    setThirdComp(event.target.value);
  }
  const handleClick = () => {
    props.updateValue(props.update.secondComp, thirdComp);
  }
  const reset = () => {
    props.updateValue('', '');
  }

  return (
    <div className="col">
          <input type="text" className="form-control" onChange={getThirdComp} value={ thirdComp ?? ""} id="child-component-3"/>
          <button type="button" className="btn btn-primary" onClick={handleClick} >Update</button>
          <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div> 
  )
}

export default Third
