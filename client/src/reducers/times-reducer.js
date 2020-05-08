const initialState = {
  startTime: '6:00am',
  endTime: '10:00pm',
};

export default function timesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_START_TIME': {
      return {
        ...state,
        startTime: action.startTime
      };
    }

    case 'SET_END_TIME': {
      return {
        ...state,
        endTime: action.endTime
      };
    }

    default: {
      return state;
    }
  }
}
