/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from './components/AuthForm/AuthSlice/selectors';
import { UserHomePage } from './pages/UserHomePage';
import { useAuthSlice, authActions } from './components/AuthForm/AuthSlice';

export function App() {
  const { i18n } = useTranslation();
  const { actions } = useAuthSlice();
  const dispatch = useDispatch();
  const authForm = useSelector(selectAuth);
  const token = authForm.token;
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route path="/signIn">
          {token != '' ? <Redirect to="/" /> : <AuthPage />}
        </Route>
        <Route path="" component={token == '' ? HomePage : UserHomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
