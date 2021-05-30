import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { authActions as actions } from '.';
import { selectAuth } from './selectors';
import axios from 'axios';

function* postSignUp() {
  let authState = yield select(selectAuth);
  const {
    username,
    password,
    email,
    languages_known,
    languages_to_learn,
  } = authState;
  const result = yield call(
    axios.post,
    'http://localhost:8000/accounts/register/',
    {
      username: username,
      email: email,
      password: password,
      languages_known: languages_known,
      languages_to_learn: languages_to_learn,
    },
  );
  console.log(result);
  if (Number.isInteger(result.data.pk)) {
    yield put(actions.setAccountCreated(true));
  }
}

function* requestSignIn() {
  let authState = yield select(selectAuth);
  const { username, password } = authState;
  const result = yield call(
    axios.post,
    'http://localhost:8000/accounts/login/',
    {
      username: username,
      password: password,
    },
  );
  if (result.data.token) {
    yield put(actions.setToken(result.data.token));
  }
}

export function* authSaga() {
  yield takeLatest(actions.requestSubmit.type, postSignUp);
  yield takeLatest(actions.setAccountCreated.type, requestSignIn);
  yield takeLatest(actions.requestLogIn.type, requestSignIn);
}
