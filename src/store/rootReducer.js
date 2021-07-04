import {combineReducers} from 'redux';
import authReducer from '@features/auth/state/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
