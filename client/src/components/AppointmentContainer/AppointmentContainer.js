import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import Dialog from '@material-ui/core/Dialog';
import { 
  deleteTask,
  editTask,
} from '../../actions';
import { useDispatch } from 'react-redux';

const AppointmentContainer = ({ name, duration, id }) => {
  const [modal, setModal] = useState(false);
  const [localTask, setLocalTask] = useState('Wake-up');
  const [localDuration, setLocalDuration] = useState(15)
  const dispatch = useDispatch();
  
  const times = [15, 30, 45, 60, 75, 90, 105, 120];
  const tasks = [
    'Wake-up', 'Breakfast', 'Lobby-Call', 'Van-Call', 
    'Drive-Time', 'Lunch-Stop', 'Load-In', 
    'Sound-Check', 'Dinner-Time', 'Stage-Time', 
    'Set-Length', 'After-Party', 'Load-Van', 
    'Hotel-Drive', 'Airport-Drive', 'Bed-time',
    ];

  const height = `${duration * 2.2}px`;
  console.log(name)
  console.log(duration)

  const handleClick = () => {
    setModal(true);
    console.log('double clicked')
  }

  const handleClose = () => {
    setModal(false)
  }

  const handleDelete = (event) => {
    event.preventDefault()
    dispatch(deleteTask(id))
    console.log('dispatched')
    handleClose()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(editTask(localTask, localDuration, id))
    console.log('dispatched')
    handleClose()
  }

  return (
    <Draggable
      grid={[255, 33]}
      bounds={{
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Wrapper>
        <AppointmentButton onDoubleClick={handleClick} style={{height}}>
          {name}
        </AppointmentButton>

        <Dialog open={modal}>
          <DialogWrapper>
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
                    <Button onClick={handleDelete}>
                      Delete
                    </Button>
                  </div>
                </FieldThree>
            </form>
          </DialogWrapper>
        </Dialog>

      </Wrapper>
    </Draggable>
  )
}

const Wrapper = styled.div`
  top: 0px;
  left: 0px;
`;

const DialogWrapper = styled.div`
  background-color: white;
  width: 15vw;
  padding: 15px;
`;

const AppointmentButton = styled.button`
  margin: 1px;
  width: 235px;
  border-radius: 5px;
  border: 1px solid black;
  background: #ffb6c1;
  position: absolute;
  font-size: 20px;
  :hover {
    background: #FF83A8;
  }
`;

const Button = styled.button`
  background: #ffb6c1;
  border: 1px solid black;
  :hover {
    background: #FF83A8;
  }
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


export default AppointmentContainer
