/**
 *
 * UserHomePage
 *
 */
import * as React from 'react';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { useMatchesSlice, matchesActions } from './MatchesSlice';
import { selectMatches } from './MatchesSlice/selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  useAuthSlice,
  authActions,
} from './../../components/AuthForm/AuthSlice';
import { selectAuth } from './../../components/AuthForm/AuthSlice/selectors';

interface Props {}

export function UserHomePage(props: Props) {
  const dispatch = useDispatch();
  const { actions } = useMatchesSlice();
  const matchesPage = useSelector(selectMatches);
  const { isLoading, matches, roomLink, hasRoom } = matchesPage;
  const auth = useSelector(selectAuth);
  if (!isLoading) {
    dispatch(actions.startLoading(true));
  }
  const getRoom = (user, dispatch) =>
    new Promise<void>((resolve, reject) => {
      dispatch(actions.requestRoom(user));
      resolve();
    });
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  return (
    <div
      style={{
        backgroundColor: '#579af7',
        minHeight: '200px',
        textAlign: 'center',
        margin: 'auto',
        width: '60%',
        padding: '10px',
      }}
    >
      <span>
        {' '}
        Welcome! Here are the people you matched with. Click their name to begin
        chatting.{' '}
      </span>
      <select
        value={hasRoom}
        onChange={event => {
          dispatch(actions.requestRoom(event.currentTarget.value));
        }}
      >
        {matches?.map(match => (
          <option value={match.user}>{match.user}</option>
        ))}
        ;
      </select>
      <button
        style={{
          backgroundColor: '#f4511e',
          border: 'none',
          color: 'white',
          padding: '16px 32px',
          textAlign: 'center',
          fontSize: '16px',
          margin: '4px 2px',
          opacity: '0.6',
          transition: '0.3s',
          display: 'inline-block',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
        onClick={event => {
          document.cookie = 'token = ' + auth.token;
          window.location.href = roomLink;
          //dispatch(actions.loadRoom(roomLink));
        }}
      >
        {' '}
        get room{' '}
      </button>
    </div>
  );
}
