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
  const { matches, isLoading, roomLink } = matchesState;
  const result = yield call(axios.get, 'http://localhost:8000/accounts/', {
    headers: { Authorization: 'Token ' + token },
  });
  const { data } = result;
  yield put(matchesActions.setMatches(data));
}

function* setRoom() {
  let authState = yield select(selectAuth);
  const { token } = authState;
  let matchesState = yield select(selectMatches);
  const { hasRoom, roomLink } = matchesState;
  const result = yield call(
    axios.post,
    'http://localhost:8000/chat/',
    {
      user: hasRoom,
    },
    {
      headers: { Authorization: 'Token ' + token},
    },
  );
  const { data } = result;
  //console.log(result.data.url);
  yield put(
    matchesActions.setRoomLink('http://localhost:8000/chat/' + result.data.url),
  );
  //console.log(roomLink);
}

export function* matchesSaga() {
  yield takeLatest(matchesActions.startLoading.type, requestMatches);
  yield takeLatest(matchesActions.requestRoom.type, setRoom);
}
