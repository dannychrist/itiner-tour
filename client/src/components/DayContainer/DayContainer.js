import React, { useState } from 'react';
import styled from 'styled-components';

//import components
import DayGrid from '../DayGrid';
import CalendarDate from '../CalendarDate';
import AppointmentFormContainer from '../AppointmentFormContainer';
import UserPreferenceFormContainer from '../UserPreferenceFormContainer';
import UserCalendarFormContainer from '../UserCalendarFormContainer';

const DayContainer = () => {
  const [active, setActive] = useState(null)

  const handleClick = (event) => {
    if (event.target.id === 'Appointment') {
      setActive('Appointment');
    } else if (event.target.id === 'Preference') {
      setActive('Preference');
    } else if (event.target.id === 'Calendar') {
      setActive('Calendar');
    } 
  }

  const handleClose = () => {
    setActive(null);
  }

  return (
    <Wrapper>
      <DayGridDiv>
        <DayGrid />
      </DayGridDiv>

      <MainButtonDiv>

      <ButtonDiv>
          <Button
            id="Calendar"
            onClick={handleClick}
          >
            Pick a Date
          </Button>
        </ButtonDiv>
        
        <ButtonDiv>
          <Button
            id="Appointment"
            onClick={handleClick}
          >
            Create New Task
          </Button>
        </ButtonDiv>

        <ButtonDiv>
          <Button
            id="Preference"
            onClick={handleClick}
          >
            Change Times
          </Button>
        </ButtonDiv>

        {active === 'Calendar' && 
          <UserCalendarFormContainer 
            handleClose={handleClose}
          />}

        <ContainerDiv>
          {active === 'Appointment' && 
          <AppointmentFormContainer 
            handleClose={handleClose}
          />}

          {active === 'Preference' && 
          <UserPreferenceFormContainer 
            handleClose={handleClose}
          />}

        </ContainerDiv>
      </MainButtonDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  position: fixed;
  width: 100%;
`;

const DayGridDiv = styled.div`
  background: #FFAD5C;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainButtonDiv = styled.div`
  background: #FFFADF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
`;

const ButtonDiv = styled.div`
  padding: 15px;
  
`;

const ContainerDiv = styled.div`
  padding: 15px;
`;

const Button = styled.button`
  margin-top: 1px;
  margin-left: 1px;
  padding: 10px;
  border-radius: 30px;
  border: 2px solid black;
  width: 200px;
  font-size: 20px;
  background: #87CEEB;
  
  :hover {
    background-color: #008CBA;
    color: white;
  }
  
  

`;

export default DayContainer
