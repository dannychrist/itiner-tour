import React from 'react';
import styled from 'styled-components';
import DayList from '../DayList';
import AppointmentList from '../AppointmentList';
import CalendarDate from '../CalendarDate';

const DayGrid = () => {
  return (
    <Wrapper>
      <CalendarDiv>
        <CalendarDate />
      </CalendarDiv>
      
      <GridWrapper>

        <DayListWrapper>
          <DayList />
        </DayListWrapper>

        <AppointmentListWrapper>
          <AppointmentList />
        </AppointmentListWrapper>

      </GridWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 550px;
  min-width: 550px;
  padding-bottom: 60px;
  
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.6fr;
  height: 70vh;
  width: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  border: solid black;
`;


const DayListWrapper = styled.div`
  background: #333333;

`;

const AppointmentListWrapper = styled.div`
  background: #FFFADF;
  position: 'absolute';
`;

const CalendarDiv = styled.div`
  padding-bottom: 10px;
`;

export default DayGrid
