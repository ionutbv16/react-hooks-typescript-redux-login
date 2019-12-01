import React from 'react';

import styled, { css } from 'styled-components';
//import style from './login.scss';
import style from '../../LoginPage/login.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const blackColor = 'black';
const whiteColor = 'white';

const Wrapper = styled.div`
  background-color: ${blackColor};
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70px;
  display: flex;
`;

const Content = styled.div`
  height: 70px;
  min-height: 70px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
`;

const LogoWrapper = styled.div`
  height: 70px;
  min-height: 70px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
`;

const Nav = styled.nav`
  box-shadow: none;
  display: flex;
  background-color: transparent;
  letter-spacing: 1.5px;
  line-height: 22.5px;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  font-size: 15px;
  animation: 0s ease 0s 1 normal none running none;
  box-shadow: rgba(0, 0, 0, 0.5) 5px 0px 15px -5px;
`;

const NavItem = styled.div`
  display: flex;
  font-family: SimplonNorm-Medium, Helvetica, sans-serif;
  -webkit-box-align: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  margin: 0px 15px;
  padding: 15px;

  a {
    color: ${whiteColor};
  }

  a:hover {
    text-decoration: none;
  }
`;

export const Navigation = () => {
  const user = useSelector(state => state.authentication.user);
  const loginLink = user
    ? { link: 'account', text: 'My Account' }
    : { link: 'login', text: 'Login' };
  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <a href="#">
            <img
              className={style.Logo}
              src="b085fe7aa72e64c8486db41e33d6e884.svg"
            />
          </a>
        </LogoWrapper>

        <Nav>
          <NavItem>
            <a href="/">News</a>
          </NavItem>
          <NavItem>
            <a href="/">Partners</a>
          </NavItem>
          <NavItem>
            <a href="/">Join</a>
          </NavItem>
          <NavItem>
            <Link to={`/${loginLink.link}`}>{loginLink.text}</Link>
          </NavItem>
        </Nav>
      </Content>
    </Wrapper>
  );
};
