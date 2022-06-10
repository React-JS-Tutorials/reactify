import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    personalInfo: { fName: '', lName: '', gender: '', profile: { developer: '', designer: '' } },
    contactInfo: { email: '', phone: '' },
    address: {
      state: '', city: '', geolocation: { lat: '', long: '' },
    },
    newsletter: ''
  });
  const onChange = e => {
    let data = { ...user };
    let name = e.target.name;
    let val = e.target.value;
    if (name === 'fName' || name === 'lName' || name === "gender") {
      data = { ...data, personalInfo: { ...data.personalInfo, [name]: val } };
    } if (name === 'developer' || name === 'designer') {
      data = { ...data, personalInfo: { ...data.personalInfo, profile: { ...data.personalInfo.profile, [name]: val } } };
    } else if (name === 'email' || name === 'phone') {
      data = { ...data, contactInfo: { ...data.contactInfo, [name]: val } };
    } else if (name === 'state' || name === 'city') {
      data = { ...data, address: { ...data.address, [name]: val } };
    } else if (name === 'lat' || name === 'long') {
      data = { ...data, address: { ...data.address, geolocation: { ...data.address.geolocation, [name]: val } } };
    }else if(name === 'newsletter'){
      data = {...data, newsletter: {[name]: val}}
    }
    setUser(data);
  };
  const submit = e => {
    e.preventDefault();
    navigate("/second", {state:{user:user}});
    console.log(JSON.stringify(user));
  };
  return (
    <div>
      <form action="">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="fName"
            value={user.personalInfo.fName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lName"
            value={user.personalInfo.lName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={user.contactInfo.email}
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="phone"
            value={user.contactInfo.phone}
            name="phone"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <select className="form-select" name="state" onChange={onChange} selected={user.address.state} >
            <option value="default">Choose State</option>
            <option value="punjab">Punjab</option>
            <option value="hariyana">Hariyana</option>
            <option value="himachal">Himachal</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            name="city"
            value={user.address.city}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Latitude"
            value={user.address.geolocation.lat}
            name="lat"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Longitude"
            value={user.address.geolocation.long}
            name="long"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="male" onChange={onChange} checked={user.personalInfo.gender === "male"} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="female" onChange={onChange} checked={user.personalInfo.gender === "female"} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
        <div className="form-group form-check">
          <input className="form-check-input" type="checkbox" name="developer" onChange={(e) => { onChange({ target: { name: e.target.name, value: e.target.checked } }) }} checked={user.personalInfo.profile.developer}/>
          <label className="form-check-label" htmlFor="flexCheckDisabled">
            Web Developer
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="designer" onChange={(e) => { onChange({ target: { name: e.target.name, value: e.target.checked } }) }} checked={user.personalInfo.profile.designer}/>
          <label className="form-check-label" htmlFor="flexCheckDisabled">
            Web Designer
          </label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" name="newsletter" onChange={(e) => { onChange({ target: { name: e.target.name, value: e.target.checked } }) }} checked={user.newsletter} />
          <label className="form-check-label">Newsletter</label>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}