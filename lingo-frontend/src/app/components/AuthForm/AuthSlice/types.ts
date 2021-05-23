/* --- STATE --- */
export interface AuthState {
  username: string;
  password: string;
  email: string;
  isSubmitted: boolean;
  accountCreated: boolean;
  token: string;
  //languages_known: string;
  //languages_to_learn: string;
}
