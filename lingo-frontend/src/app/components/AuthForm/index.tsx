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
  /*
  function handleSubmit() {
    //event.preventDefault();
    alert(username);
    axios
      .post('http://localhost:8000/accounts/register/', { username })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  */

  const { actions } = useAuthSlice();
  const dispatch = useDispatch();
  const authForm = useSelector(selectAuth);
  const { username, password, email } = authForm;

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
        <p> confirm password </p>
        <input
          type="password"
          //value={formValues.password2}
          name="password2"
          placeholder="password2"
          //onChange={handleInputChange}
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
        <select name="languages_known">
          <option>Spanish</option>
          <option>English</option>
          <option>Mandarin</option>
        </select>
        <p> languages you would like to learn </p>
        <select name="languages_to_learn">
          <option>Spanish</option>
          <option>English</option>
          <option>Mandarin</option>
        </select>
        <p> submit here! </p>
      </form>
      <button> submit </button>
    </div>
  );
}
