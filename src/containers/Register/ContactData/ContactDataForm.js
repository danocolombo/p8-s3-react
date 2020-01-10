import React from "react";
// import './ContactData.css'
function RegisterForm(props) {
  return (
    <form>
      <div>
        <label className="RegisterLabel" htmlFor="title">Your name</label>
        <div>
          <input
            id="firstName"
            type="text"
            onChange={props.onFieldChange}
            name="fName"
            className="RegisterControl"
            placeholder="first name"
            value={props.registration.fName}
          />
             
          <input
            id="lastName"
            type="text"
            onChange={props.onFieldChange}
            name="lName"
            className="RegisterControl"
            placeholder="last name"
            value={props.registration.lName}
            
          />
        </div>
      </div>

      <div>
        <label className="RegisterLabel" htmlFor="email">Email</label>
        <div>
        <input
            id="email"
            type="text"
            onChange={props.onFieldChange}
            name="email"
            className="RegisterControl"
            placeholder="email@address.here"
            value={props.registration.email}
            size="50"
          />
        </div>
      </div>
      <div>
      <label className="RegisterLabel" htmlFor="phone">Phone Number</label>
        <div>
          <input
            id="phone"
            type="text"
            onChange={props.onFieldChange}
            name="phone"
            className="RegisterControl"
            placeholder="(123) 456-1234"
            value={props.registration.phone}
          />
        </div>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={props.onFieldChange}
            id="newsletter"
            name="newsletter"
            className="RegisterControl"
            value={props.registration.newsletter}
          />
          <label className="NewsletterLabel" htmlFor="category">&nbsp;&nbsp;Would you like to receive the national CR newsletter?</label>
        </div>
      </div>
      <div>
        
        <div>
          <select
            id="registrationCnt"
            name="registrationCount"
            onChange={props.onFieldChange}
            value={props.registration.registrationCount}
            className="RegistrationControl"
          >
            <option value="" />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <label className="RegCountLabel" htmlFor="email">&nbsp;&nbsp;Counting yourself, how many are you registering for the event?</label>
        </div>
      </div>


      <div>
        <label className="RegisterLabel" htmlFor="crName">Your CR Church</label>
        <div>
          <input
            type="text"
            id="category"
            name="crName"
            placeholder="Church Name"
            onChange={props.onFieldChange}
            className="RegisterControl"
            value={props.registration.crName}
          />
        </div>
      </div>
      <div>
        <label className="RegisterLabel" htmlFor="crCity">Your CR Location</label>
        <div>
          <input
            type="text"
            id="crCity"
            name="crCity"
            placeholder="City"
            onChange={props.onFieldChange}
            className="RegisterControl"
            value={props.registration.crCity}
          />
          <input
            type="text"
            id="crState"
            name="crState"
            placeholder="State"
            onChange={props.onFieldChange}
            className="RegisterControl"
            value={props.registration.crState}
          />
        </div>
      </div>
      <div>
        <label className="RegisterLabel" htmlFor="email">What role do you have at your CR?</label>
        <div>
          <select
            id="crRole"
            name="crRole"
            onChange={props.onFieldChange}
            value={props.registration.crRole}
            className="RegisterControl"
          >
            <option value="1">Ministry Leader</option>
            <option value="2">Leader</option>
            <option value="3">Volunteer</option>
            <option value="4">Participant</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={props.onFieldChange}
            id="hostP8"
            name="hostP8"
            className="RegisterControl"
            value={props.registration.newsletter}
          />
          <label className="HostP8Label" htmlFor="hostP8">&nbsp;&nbsp;Would your CR be willing to host a future P8 rally?</label>
        </div>
      </div>
      <div>
        <label className="RegisterLabel" htmlFor="notes">Comments</label>
        <div>
          <input
            type="textbox"
            id="notes"
            name="notes"
            row="4"
            onChange={props.onFieldChange}
            className="RegisterControl"
            value={props.registration.notes}
          />
        </div>
      </div>
      <div></div>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default RegisterForm;