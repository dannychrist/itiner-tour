import React, { useState} from 'react';
import styled from 'styled-components';
import { 
  setDate,
} from '../../actions';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const UserCalendarForm = ({ handleClose }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setDate(selectedDate))
    console.log(selectedDate)
    handleClose()
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FieldOne>
          <CalendarWrapper>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat='dd/MM/yyy'
              minDate={new Date()}
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown
          />
          </CalendarWrapper>

        </FieldOne>
        <FieldTwo>
          <div style={{margin: '10px'}}>
            <Button type="submit">
              Submit
            </Button>
          </div>
          <div style={{margin: '10px'}}>
            <Button onClick={handleClose}>
              Close
            </Button>
          </div>
        </FieldTwo>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  dislay: flex;
  justify-content: center;
  align-items: center;
`;

const FieldOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const FieldTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 100%;
`;

const Button = styled.button`
  background: #ffb6c1;
  border: 1px solid black;
  :hover {
    background: #FF83A8;
  }
`;

export default UserCalendarForm
