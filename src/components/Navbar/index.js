import React from 'react'
import { FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks, NavBtn, NavBtnlink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <h1>Hey</h1>
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign Up</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnlink to="/signin">Sign In</NavBtnlink>
                    </NavBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar