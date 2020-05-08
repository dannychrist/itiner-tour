import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import styled from 'styled-components';
import NavItems from '../NavItems';
import { Icon } from 'react-icons-kit';
import {list} from 'react-icons-kit/fa/list';



const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Wrapper>
      <NavWrapper>
      {isAuthenticated && (
      <NavItems icon={<Icon size={25} style={{color: 'white'}} icon={list}/>} />
        )}
      </NavWrapper>
      <ButtonWrapper>
        {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect({})}>{props.login}</Button>
        )}
        {isAuthenticated && <Button onClick={() => logout()}>{props.logout}</Button>}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--nav-size);
  background-color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed; 
  top: 0;
  width: 100%; 
  z-index: 10;
`;

const NavWrapper = styled.div`
  padding: 0px 20px 0px 20px;
`;

const ButtonWrapper = styled.div`
  padding: 1rem;
`;

const Button = styled.button`
  --button-size: calc(var(--nav-size)* 0.5);
  width: var(--button-size);
  height: var(--button-size);
  padding-top: 5px;
  margin: 2px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export default NavBar;