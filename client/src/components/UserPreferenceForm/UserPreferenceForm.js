import React, { useState } from 'react';
import styled from 'styled-components';
import timeList from '../../timeList';
import { 
  setStartTime,
  setEndTime,
} from '../../actions';
import { useDispatch } from 'react-redux';


const UserPreferenceForm = ({ handleClose }) => {
  const [localStartTime, setLocalStartTime] = useState('6:00am');
  const [localEndTime, setLocalEndTime] = useState('10:00pm');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setStartTime(localStartTime))
    dispatch(setEndTime(localEndTime))
    console.log('dispatched')
    handleClose()
  }

  console.log(localStartTime)
  console.log(localEndTime)
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FieldOne>
          <LabelWrapper>
            <Label>Start:</Label>
          </LabelWrapper>
            <select onChange={event=>{setLocalStartTime(event.target.value)}} value={localStartTime}>
              {
                timeList.map((time, index) => {
                  return (
                  <option key={index} value={time}>{time}</option>
                  )
                })
              }
            </select>
        </FieldOne>

        <FieldTwo>
          <LabelWrapper>
            <Label>End:</Label>
          </LabelWrapper>
            <select onChange={event=>{setLocalEndTime(event.target.value)}} value={localEndTime}>
              {
                timeList.map((time, index) => {
                  return (
                  <option key={index}>{time}</option>
                  )
                })
              }
            </select>
        </FieldTwo>

        <FieldThree>
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
        </FieldThree>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const FieldThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Label = styled.label`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 100%;
  border-bottom: 1px solid black;
`;

const Button = styled.button`
  background: #ffb6c1;
  border: 1px solid black;
  :hover {
    background: #FF83A8;
  }
`;

export default UserPreferenceForm
