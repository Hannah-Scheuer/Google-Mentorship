/* --- STATE --- */
export interface MatchesState {
  isLoading: boolean;
  matches: { user: string }[];
  hasRoom: string;
  roomLink: string;
  hasRoomLink: string;
}
