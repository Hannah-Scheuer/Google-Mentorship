/**
 *
 * LogInForm
 *
 */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthSlice, authActions } from './../AuthForm/AuthSlice';
import { selectAuth } from './../AuthForm/AuthSlice/selectors';

interface Props {}

export function LogInForm(props: Props) {
  const { actions } = useAuthSlice();
  const dispatch = useDispatch();
  const authForm = useSelector(selectAuth);
  const { username, password } = authForm;

  return (
    <div>
      <form>
        <p> username </p>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={event => {
            dispatch(actions.setUsername(event.currentTarget.value));
          }}
        />
        <p> password </p>
        <input
          type="password"
          value={password}
          name="password1"
          placeholder="password1"
          onChange={event => {
            dispatch(actions.setPassword(event.currentTarget.value));
          }}
        />
      </form>
      <button
        onClick={event => {
          dispatch(actions.requestLogIn(true));
        }}
      >
        {' '}
        submit{' '}
      </button>
    </div>
  );
}
