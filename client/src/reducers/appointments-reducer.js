const initialState = {
  list: []
}

export default function appointmentsReducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case 'SET_TASK': {
      let task = {
        name: action.task, 
        duration: action.duration, 
      }
      newState.list.push(task)
      return newState;
    }

    case 'EDIT_TASK': {
      console.log(newState.list)
      console.log(action.id)
      console.log(typeof action.id)
      newState.list[action.id].name = action.name
      newState.list[action.id].duration = action.duration
      return newState;
    }

    case 'DELETE_TASK': {
      delete newState.list.splice(action.id, 1);
      return newState;
    }

    default: {
      return state;
    }
  }
}