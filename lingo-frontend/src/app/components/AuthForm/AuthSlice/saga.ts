import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { authActions as actions } from '.';
import axios from 'axios';

async function requestAuth(username: string) {
  console.log('requestAuth was called');
  return await axios.post('http://localhost:8000/accounts/register/', {
    username,
  });
  /*
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);

    });
    */
}
function* postSignIn() {
  const result = yield call(
    axios.post,
    'http://localhost:8000/accounts/register/',
    { username: 'myUsername' },
  );
  yield put(actions.setResponseString('we got a response'));
}

export function* authSaga() {
  yield takeLatest(actions.requestSubmit.type, postSignIn);
}
