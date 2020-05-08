import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  setTask,
} from '../../actions';
import { useDispatch } from 'react-redux';

const AppointmentForm = ( { handleClose }) => {
  const [localTask, setLocalTask] = useState('Wake-up');
  const [localDuration, setLocalDuration] = useState(15)
  const dispatch = useDispatch();

  const times = [15, 30, 45, 60, 75, 90, 105, 120];
  const tasks = [
  'Wake-up','Breakfast', 'Lobby-Call', 'Van-Call', 
  'Drive-Time', 'Lunch-Stop', 'Load-In', 
  'Sound-Check', 'Dinner-Time', 'Stage-Time', 
  'Set-Length', 'After-Party', 'Load-Van', 
  'Hotel-Drive', 'Airport-Drive', 'Bed-time',
  ];

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(setTask(localTask, localDuration))
    console.log('dispatched')
    handleClose()
  }


  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FieldOne>
        <LabelWrapper>
          <Label>Band Tasks:</Label>
        </LabelWrapper>
          <select onChange={event=>{setLocalTask(event.target.value)}} value={localTask}>
                  {
                    tasks.map((task, index) => {
                      return (
                      <option key={index} value={task}>{task}</option>
                      )
                    })
                  }
                </select>
        </FieldOne>

        <FieldTwo>
          <LabelWrapper>
            <Label>Duration:</Label>
          </LabelWrapper>
            <select onChange={event=>{setLocalDuration(event.target.value)}} value={localDuration}>
                {
                  times.map((time, index) => {
                    return (
                    <option key={index} value={time}>{`${time} minutes`}</option>
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

export default AppointmentForm
