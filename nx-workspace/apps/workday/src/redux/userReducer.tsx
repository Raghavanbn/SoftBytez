import User from './User';

// Define action types as string constants
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

// Define action creators with explicit types
interface SetUserAction {
  type: typeof SET_USER;
  payload: User; // User is the type for your user data
}

interface LogoutAction {
  type: typeof LOGOUT;
}

// Define a union type for all possible actions
type UserActionTypes = SetUserAction | LogoutAction;

// Action creators
export const setUser = (user: User): SetUserAction => ({
  type: SET_USER,
  payload: user,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});



const initialState = {
    user: null, // Initial state can be null or an empty object
  };
  
  const userReducer = (state = initialState, action: UserActionTypes) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      // Add other actions for user-related state changes
      default:
        return state;
    }
  };
  
  export default userReducer;
  