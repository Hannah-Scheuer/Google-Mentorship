import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthForm } from '../../components/AuthForm';
import { LogInForm } from '../../components/LogInForm';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <span>
        Welcome to LingoBerries! Log in below or sign up if you're new.
      </span>
      <LogInForm />
      <Link to="/signIn"> Sign Up </Link>
    </>
  );
}
