/**
 *
 * UserHomePage
 *
 */
import * as React from 'react';
import { useMatchesSlice, matchesActions } from './MatchesSlice';
import { selectMatches } from './MatchesSlice/selectors';

interface Props {}

export function UserHomePage(props: Props) {
  return (
    <div>
      {' '}
      <p> This is the user home page </p>
      dispatch(actions.startLoading(true));
    </div>
  );
}
