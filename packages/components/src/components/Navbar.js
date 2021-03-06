import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import User from '../store/User';

function Navbar({navigation}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div onClick={()=>{
					navigation.push('Home')
					closeMobileMenu()
				}} className='navbar-logo'>
            TRVL
            <i class='fab fa-typo3' />
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <div onClick={()=>{
					navigation.push('Home')
					closeMobileMenu()
				}} className='nav-links'>
                Home
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
				onClick={()=>{
					navigation.push('Services')
					closeMobileMenu()
				}}
              >
                Services
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={()=>{
					navigation.push('Products')
					closeMobileMenu()
				}}
              >
                Products
              </div>
            </li>

            <li>
              <div
                className='nav-links-mobile'
                onClick={()=>{
					navigation.push('SignIn')
					closeMobileMenu()
				}}
              >
                Sign In
              </div>
            </li>
          </ul>
          {button && <Button 
				onClick={()=>{
						if(User.isAuthenticated){
							navigation.push('Profile')
							closeMobileMenu()
						} else {
							navigation.push('SignIn')
							closeMobileMenu()
						}
					}
				} 
				buttonStyle='btn--outline'>{User.isAuthenticated ? 'PROFILE' : 'SIGN IN'}</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
