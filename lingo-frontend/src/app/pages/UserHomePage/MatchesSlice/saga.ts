import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { matchesActions } from '.';
import { selectMatches } from './selectors';
import { authActions } from './../../../components/AuthForm/AuthSlice';
import { selectAuth } from './../../../components/AuthForm/AuthSlice/selectors';
import axios from 'axios';

function* requestMatches() {
  let authState = yield select(selectAuth);
  const { token } = authState;
  let matchesState = yield select(selectMatches);
  const { matches, isLoading } = matchesState;
  const result = yield call(axios.get, 'http://localhost:8000/accounts/', {
    headers: { Authorization: 'Token ' + token },
  });
  console.log(result);
  const { data } = result;
  yield put(matchesActions.setMatches(data));
}

export function* matchesSaga() {
  yield takeLatest(matchesActions.startLoading.type, requestMatches);
}
