/**
 *
 * UserHomePage
 *
 */
import * as React from 'react';
import { useMatchesSlice, matchesActions } from './MatchesSlice';
import { selectMatches } from './MatchesSlice/selectors';
import { useSelector, useDispatch } from 'react-redux';

interface Props {}

export function UserHomePage(props: Props) {
  const dispatch = useDispatch();
  const { actions } = useMatchesSlice();
  const matchesPage = useSelector(selectMatches);
  if (!matchesPage.isLoading) {
    dispatch(actions.startLoading(true));
  }
  return (
    <div>
      <span>
        {' '}
        Welcome! Here are the people you matched with. Click their name to begin
        chatting.{' '}
      </span>
      {matchesPage.matches?.map(match => (
        <li>{match.user}</li>
      ))}
    </div>
  );
}
