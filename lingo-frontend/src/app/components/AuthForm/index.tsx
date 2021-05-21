/**
 *
 * AuthForm
 *
 */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ChangeEvent } from 'react';

interface Props {}

export function AuthForm(props: Props) {
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

  const [username, setUsername] = useState('');
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const [password, setPassword] = useState('');
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  return (
    <div>
      <form>
        <p> username </p>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <p> password </p>
        <input
          type="password"
          value={password}
          name="password1"
          placeholder="password1"
          onChange={handlePasswordChange}
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
          //value={formValues.email}
          name="email"
          placeholder="email"
          //onChange={handleInputChange}
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
      <button onClick={handleSubmit}> submit </button>
    </div>
  );
}
