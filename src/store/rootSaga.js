import {all} from 'redux-saga/effects';
import {authSagas} from '@features/auth/state/saga';

function* rootSaga() {
  yield all([...authSagas]);
}

export default rootSaga;
