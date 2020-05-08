import { combineReducers } from 'redux';

import times from './times-reducer';
import appointments from './appointments-reducer';
import dates from './calendar-reducer';

export default combineReducers({ times, appointments, dates });