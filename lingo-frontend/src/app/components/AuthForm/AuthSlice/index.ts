import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from './saga';
import { AuthState } from './types';

export const initialState: AuthState = {
  username: '',
  password: '',
  email: '',
  isSubmitted: false,
  token: '',
  accountCreated: false,
  languages_known: '',
  languages_to_learn: '',
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    requestSubmit(state, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    },
    setAccountCreated(state, action: PayloadAction<boolean>) {
      state.accountCreated = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setLangKnown(state, action: PayloadAction<string>) {
      state.languages_known = action.payload;
    },
    setLangLearn(state, action: PayloadAction<string>) {
      state.languages_to_learn = action.payload;
    },
    requestLogIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
