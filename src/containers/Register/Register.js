import React, { useState } from "react";
import ContactData from './ContactData/ContactDataForm';
import './Register.css';
const Register = props => {
    const [ registration, setRegistration ] = useState({
      fName: "",
      lName: "",
      email: "",
      phone: "",
      newletter: false,
      registrationCount: 0,
      crName: "",
      crCity: "",
      crState: "",
      crRole: "2",
      hostP8: false,
      notes: "",
    });

    function handleFormChange({target}){
      const updatedRegistration = { ...registration, [target.name]: target.value };
      setRegistration(updatedRegistration);
    }
    return (
      <>
        <h2>Register</h2>
        <ContactData registration={registration}
          onFieldChange={handleFormChange}/>
      </>
    );
  };
  
  export default Register;