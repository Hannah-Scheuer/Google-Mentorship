import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthForm } from '../../components/AuthForm';

export function AuthPage() {
  return (
    <>
      <Helmet>
        <title>Auth Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>This is AuthPage Hello!!! what's up 你好</span>
      <AuthForm />
    </>
  );
}
