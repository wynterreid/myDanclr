import React from 'react';
import {Link} from 'react-router-dom';

const LoginHeader = () => {
  return(
<>
<div className="loginHeader">
<Link to='/dashboard'><img className="logo" src="https://i.pinimg.com/736x/de/bc/fc/debcfc60d832a67e670024fca6fb4bd4.jpg" alt="" title="source: imgur.com" /></Link>
<div class="searchContainer">
  <i class="fa fa-search searchIcon"></i>
  <input class="searchBox" type="search" name="search" placeholder="Search Danclr "/>
</div>
</div>
</>
)}

export default LoginHeader;
