import React, { useState } from 'react';
import styled from 'styled-components';
import NavDropdown from '../NavDropdown';



const NavItems = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
        <Button onClick={() => setOpen(!open)} >
          {props.icon}
          
          {open && (
            <NavDropdown />
          )}
          
        </Button>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(var(--nav-size)* 0.8);
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



export default NavItems
