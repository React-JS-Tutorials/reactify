import React, {useState, useEffect} from 'react';

function Second(props) {
  const [secondComp, setSecondComp] = useState("");
  useEffect(() => {
    let count = 0;
    setSecondComp(props.update.secondComp ?? "");
    if(count > 0){
      props.showAlert('Value Updated!','success');
      count = count + 1;
    }
  },[props]);
  const getSecondComp = (event) => {
    setSecondComp(event.target.value);
  }

  const handleClick = () => {
    props.updateValue(secondComp, props.update.thirdComp);
  }
  const reset = () => {
    props.updateValue('', '');
  }
  return (   
      <div className="col">          
          <input type="text" className="form-control" onChange={getSecondComp} value={secondComp} id="child-component-2" />
          <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
          <button className="btn btn-primary" onClick={reset}>Reset</button>          
      </div>
  )
}

export default Second
