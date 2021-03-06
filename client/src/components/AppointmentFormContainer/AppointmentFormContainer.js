import React from 'react';
import styled from 'styled-components';
import AppointmentForm from '../AppointmentForm';

const AppointmentFormContainer = ({ handleClose }) => {
  
  return (
    <Wrapper>
      <AppointmentForm
        handleClose={handleClose}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  width: 15vw;
  padding: 15px;
  border: 2px solid black;
  border-radius: 20px;
`;

export default AppointmentFormContainer
