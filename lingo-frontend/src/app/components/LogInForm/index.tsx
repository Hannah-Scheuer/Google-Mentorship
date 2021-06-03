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
import { Link } from 'react-router-dom';

interface Props {}

export function LogInForm(props: Props) {
  const { actions } = useAuthSlice();
  const dispatch = useDispatch();
  const authForm = useSelector(selectAuth);
  const { username, password } = authForm;

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
      <form>
        <p> Welcome to LingoBerries! Log in below or sign up if you're new. </p>
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
          dispatch(actions.requestLogIn(true));
        }}
      >
        {' '}
        submit{' '}
      </button>
      <p></p>
      <Link to="/signIn"> Sign Up </Link>
    </div>
  );
}
