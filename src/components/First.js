import React, {useState, useEffect} from 'react';

function First(props) {
  
  const [secondComp, setSecondComp] = useState("");
  const [thirdComp, setThirdComp] = useState("");
  useEffect(() => {
    let count = 0;
    setSecondComp(props.update.secondComp ?? "");
    setThirdComp(props.update.thirdComp ?? "");
    if(count > 0){
      props.showAlert('Value Updated!','success');
      count = count + 1;
    }
  },[props]);

  const getSecondComp = (event) => {
    setSecondComp(event.target.value);
  }

  
  const getThirdComp = (event) => {
    setThirdComp(event.target.value);
  }
  const handleClick = () => {
    props.updateValue(secondComp, thirdComp);    
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
