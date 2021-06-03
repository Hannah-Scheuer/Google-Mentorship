import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { matchesSaga } from './saga';
import { MatchesState } from './types';

export const initialState: MatchesState = {
  isLoading: false,
  matches: [],
  hasRoom: '',
  roomLink: ' ',
  hasRoomLink: '',
};

const slice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    startLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setMatches(state, action: PayloadAction<{ user: string }[]>) {
      state.matches = action.payload;
    },
    requestRoom(state, action: PayloadAction<any>) {
      state.hasRoom = action.payload;
    },
    setRoomLink(state, action: PayloadAction<string>) {
      state.roomLink = action.payload;
    },
    loadRoom(state, action: PayloadAction<string>) {
      state.hasRoomLink = 'http://localhost:8000/chat/' + action.payload;
    },
  },
});

export const { actions: matchesActions } = slice;

export const useMatchesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: matchesSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useMatchesSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
