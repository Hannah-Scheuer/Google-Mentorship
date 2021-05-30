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
          //onChange={handleUsernameChange}
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
