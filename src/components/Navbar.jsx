import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
export default function Home() {
  const { loginWithRedirect ,logout, isAuthenticated, user } = useAuth0();
  return (
   <> 
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><b>NewsHub</b></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" refresh="true" to="/business">Business</NavLink>
        </li>
 
        <li className="nav-item">
          <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/health">Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/science">Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/technology">Technology</NavLink>
        </li>
  </ul>

  <div className="button">
    {!isAuthenticated ? <button className='btn btn-success py-1' onClick={() => loginWithRedirect()}>Log In</button>
    :
    <> <img className='mx-3' style={{width:"35px",borderRadius:"50%"}} src={user.picture} alt="" />
    <button className='btn btn-danger py-1' onClick={() => logout({ returnTo: window.location.origin })}>
    Log Out
  </button> </>}
  
  
  </div>

    </div>
  </div>
</nav>

{isAuthenticated && (
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Welcome to NewsHub !</strong> {user.name}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
)}


</>

  )
}
