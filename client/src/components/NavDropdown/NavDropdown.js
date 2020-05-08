import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const NavDropdown = (props) => {
  return (
    <Wrapper>
      <DropdownItem>
        <Link exact activeClassName="active" to="/">Home</Link>&nbsp;
      </DropdownItem>

      <DropdownItem>
        <Link activeClassName="active" to ="/create-tour">Itinerary</Link>
      </DropdownItem>

      <DropdownItem>
        <Link activeClassName="active" to="/profile">Profile</Link>
      </DropdownItem>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  position: absolute;
  top: 60px;
  left: 90px;
  width: 200px;
  transform: translateX(-45%);
  background-color: #87CEEB;
  border: 2px solid black;
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
`;

const Link = styled(NavLink)`
  display: flex;
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-align: bottom;
  border-radius: 20px;
  padding: 10px;
`;

const DropdownItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  :hover {
    background-color: white;
  }
`;

export default NavDropdown
