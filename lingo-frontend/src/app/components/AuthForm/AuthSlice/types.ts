/* --- STATE --- */
export interface AuthState {
  username: string;
  password: string;
  email: string;
  isSubmitted: boolean;
  responseString: string;
  //languages_known: string;
  //languages_to_learn: string;
}
