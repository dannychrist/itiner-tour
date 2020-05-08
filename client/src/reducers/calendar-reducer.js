const initialState = {};

export default function timesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATE': {
      console.log(action)
      return {
        ...state,
        date: action.date
      };
    }

    default: {
      return state;
    }
  }
}