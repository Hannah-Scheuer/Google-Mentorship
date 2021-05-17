/**
 *
 * AuthForm
 *
 */
import * as React from 'react';

interface Props {}

export function AuthForm(props: Props) {
  return (
    <div>
      <form>
        <p> username </p>
        <input
          type="text"
          placeholder="username"
          //value={formValues.username}
          name="username"
          //onChange={handleInputChange}
        />
        <p> password </p>
        <input
          type="password"
          //value={formValues.password1}
          name="password1"
          placeholder="password1"
          //onChange={handleInputChange}
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
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
