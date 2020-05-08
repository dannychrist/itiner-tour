import React from 'react';
import styled from 'styled-components';
import AppointmentContainer from '../AppointmentContainer';
import { useSelector } from "react-redux";

const AppointmentList = () => {
  const appointments = useSelector((state) => state.appointments);
  console.log(appointments.list[0])

  return (
    <Wrapper>
      {
        appointments.list.map((appointment, index) => {
          return (
          <AppointmentContainer 
            key={index}
            name={appointment.name}
            duration={appointment.duration}
            id={index}
          />
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

export default AppointmentList
