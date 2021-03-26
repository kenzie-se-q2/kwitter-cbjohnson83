import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GETMESSAGES = "GETMESSAGES";
export const POSTMESSAGES = "POSTMESSAGES";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case GETMESSAGES:
      return { messages: action.payload };
    case POSTMESSAGES:
      return state;

    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
