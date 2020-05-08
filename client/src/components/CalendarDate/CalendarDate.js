import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSelector } from "react-redux";

const CalendarDate = () => {
  const date = useSelector((state) => state.dates.date);

  if (date) {
  let newDate = date.toDateString()
  console.log(newDate)
  return (
  <Wrapper>{newDate}</Wrapper>
  )
  }
  return (
    <div>
      
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;

export default CalendarDate
