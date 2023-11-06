import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import decode from "jwt-decode";

import logo from '../../Assets/logo.png'
import search from '../../Assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token,dispatch]);



  return (
    <nav className='main-nav'>
        <div className='Navbar'>
          <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' />
          </Link>
          <button className='nav-item nav-btn'>About</button>
          <button  className='nav-item nav-btn'>Products</button>
          <button  className='nav-item nav-btn'>For Teams</button>

          <form>
            <input type='text' placeholder='Search..' />
            <img src={search} alt="search" width='18' class='search-icon' />
          </form>

          {User===null ?
            <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
            <>
              <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white' cursor='pointer' ><Link to='https://lottie.host/?file=3e01d108-f66a-49b6-a1f5-7bcdd9df8047/aqpeqUIYTI.json' style={{ textDecoration: 'none',color:'white' }} className=''> {User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
              <button className='nav-item nav-links' onClick = {handleLogout}>Log Out</button>
            </>  
          }

        </div>
    </nav>
  )
}

export default Navbar
