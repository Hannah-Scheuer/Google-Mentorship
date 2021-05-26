import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.matches || initialState;

export const selectMatches = createSelector([selectSlice], state => state);
