export default function App(props) { 
  let user = props.user;

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
            onChange={(e)=>{props.onChange(e)}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lName"
            value={user.personalInfo.lName}
            onChange={(e)=>{props.onChange(e)}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={user.contactInfo.email}
            name="email"
            onChange={(e)=>{props.onChange(e)}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="phone"
            value={user.contactInfo.phone}
            name="phone"
            onChange={(e)=>{props.onChange(e)}}
          />
        </div>
        <div className="form-group">
          <select className="form-select" name="state" onChange={(e)=>{props.onChange(e)}} selected={user.address.state} value={user.address.state} >
            <option value="">Choose State</option>
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
            onChange={(e)=>{props.onChange(e)}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Latitude"
            value={user.address.geolocation.lat}
            name="lat"
            onChange={(e)=>{props.onChange(e)}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Longitude"
            value={user.address.geolocation.long}
            name="long"
            onChange={(e)=>{props.onChange(e)}}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" value="male" onChange={(e)=>{props.onChange(e)}} checked={user.personalInfo.gender === "male"} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" value="female" onChange={(e)=>{props.onChange(e)}} checked={user.personalInfo.gender === "female"} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
        
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="developer" onChange={(e) => { props.onChange({ target: { name: e.target.name, value: e.target.checked } }) }} checked={user.personalInfo.profile.developer}/>
            <label className="form-check-label" htmlFor="flexCheckDisabled">
              Web Developer
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="designer" onChange={(e) => { props.onChange({ target: { name: e.target.name, value: e.target.checked } }) }} checked={user.personalInfo.profile.designer}/>
            <label className="form-check-label" htmlFor="flexCheckDisabled">
              Web Designer
            </label>
          </div>
          <div className="form-check form-switch form-check-inline">
            <input className="form-check-input" type="checkbox" name="newsletter" onChange={(e) => { props.onChange({ target: { name: e.target.name, value: e.target.checked } }) }} checked={user.newsletter} />
            <label className="form-check-label">Newsletter</label>
          </div>
        </div>
        <div className="form-group my-2">
          <button className="btn btn-primary" onClick={(e)=>{props.submit(e, "/second")}}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}