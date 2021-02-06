import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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
  window.addEventListener("resize", showButton);

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to='/'>
            TRVL
            <i className='fab fa-typo3' />
          </Logo>
          <MenuIcon onClick={handleClick}>
            {click ? <FATimes /> : <FABars />}
          </MenuIcon>
          <NavWrap click={click}>
            <NavItems>
              <NavLinks to='/' onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='/service' onClick={closeMobileMenu}>
                Service
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='/products' onClick={closeMobileMenu}>
                Products
              </NavLinks>
            </NavItems>
            <NavItems>
              {button ? (
                <NavLinks to='/sign-up'>
                  <Button buttonStyle='btn--outline'>SIGN UP</Button>
                </NavLinks>
              ) : (
                <NavLinks to='/sign-up'>
                  <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--mobile'
                    onClick={closeMobileMenu}
                  >
                    SIGN UP
                  </Button>
                </NavLinks>
              )}
            </NavItems>
          </NavWrap>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  height: 80px;
  z-index: 999;
  position: sticky;
  font-size: 1.2rem;
  background: #1c2237;
  justify-content: center;
  align-items: center;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 1300px;
`;
const Logo = styled(Link)`
  color: #fff;
  cursor: pointer;
  position: flex;
  justify-self: start;
  align-items: center;
  font-size: 2rem;
  text-decoration: none;
  margin-right: 120px;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`;
const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const FABars = styled(FaBars)`
  color: #fff;
`;

const FATimes = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
`;

const NavWrap = styled.ul<{ click: boolean }>`
  display: flex;
  justify-content: end;
  align-items: center;
  list-style: none;
  text-align: center;
`;
const NavItems = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid #f00946;
  }
`;
const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0.5rem 1rem;
`;
