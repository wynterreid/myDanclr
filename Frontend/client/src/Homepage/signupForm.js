import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const SignupForm = () => {
  return(
    <div className="SignUp">
<form>
<button className="RegisterButton"> <Link to='/auth/register'>Sign up. .5,6,7,8</Link></button>
<button  className="LoginButton"> <Link to='/auth/login'> Login. .5,6,7,8</Link></button>
</form>
  </div>
)}

export default SignupForm;
