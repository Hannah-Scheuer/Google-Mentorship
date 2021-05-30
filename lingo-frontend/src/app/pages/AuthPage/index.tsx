import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthForm } from '../../components/AuthForm';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export function AuthPage() {
  return (
    <>
      <Helmet>
        <title>Auth Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>
        Hello, please enter your information in order to make an account and
        start chatting.
      </span>
      <AuthForm />
    </>
  );
}
