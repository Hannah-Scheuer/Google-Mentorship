import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthForm } from '../../components/AuthForm';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage Hello!!! what's up 你好</span>
      <Link to="/signIn"> Sign In </Link>
      <AuthForm />
    </>
  );
}
