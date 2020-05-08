// TIME ACTIONS

export const setStartTime = (startTime) => ({
  type: 'SET_START_TIME',
  startTime
});

export const setEndTime = (endTime) => ({
  type: 'SET_END_TIME',
  endTime
});

// APPOINTMENTS ACTIONS

export const setTask = (task, duration) => ({
  type: 'SET_TASK',
  task,
  duration,
});

export const editTask = (name, duration, id ) => {
  console.log(name)
  console.log(duration)
  return({
  type: 'EDIT_TASK',
  name,
  duration,
  id,
})};

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  id
});

// CALENDAR ACTIONS

export const setDate = (date) => ({
  type: 'SET_DATE',
  date
});


