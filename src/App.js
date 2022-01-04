import React from 'react';
import './index.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
      alert(JSON.stringify("Login Successful"));
    },
    validate: values => {
      let errors = {};
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Username should be an email';
      if(!values.email) errors.email = 'Field required';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });
  return (
  <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Welcome to my form!</h1>
        <div>Email</div>
        <input name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
        <div></div>
        <button type="submit" id="submitBtn">Submit</button>
      </form>
  </div>
  );
}
export default App;
