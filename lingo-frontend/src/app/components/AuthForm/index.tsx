/**
 *
 * AuthForm
 *
 */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthSlice, authActions } from './AuthSlice';
import { selectAuth } from './AuthSlice/selectors';

interface Props {}

export function AuthForm(props: Props) {
  const { actions } = useAuthSlice();
  const dispatch = useDispatch();
  const authForm = useSelector(selectAuth);
  const {
    username,
    password,
    email,
    isSubmitted,
    languages_known,
    languages_to_learn,
  } = authForm;

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
        <p>
          {' '}
          Hello, please enter your information in order to make an account and
          start chatting.{' '}
        </p>
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
        <p> email </p>
        <input
          type="email"
          value={email}
          name="email"
          placeholder="email"
          onChange={event => {
            dispatch(actions.setEmail(event.currentTarget.value));
          }}
        />
        <p> languages you know </p>
        <select
          value={languages_known}
          onChange={event => {
            dispatch(actions.setLangKnown(event.currentTarget.value));
          }}
        >
          <option> language </option>
          <option value="ES">Spanish</option>
          <option value="EN">English</option>
          <option>Mandarin</option>
        </select>
        <p> languages you would like to learn </p>
        <select
          value={languages_to_learn}
          onChange={event => {
            dispatch(actions.setLangLearn(event.currentTarget.value));
          }}
        >
          <option> language </option>
          <option value="ES">Spanish</option>
          <option value="EN">English</option>
          <option>Mandarin</option>
        </select>
        <p> submit here! </p>
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
          dispatch(actions.requestSubmit(true));
        }}
      >
        {' '}
        submit{' '}
      </button>
    </div>
  );
}
