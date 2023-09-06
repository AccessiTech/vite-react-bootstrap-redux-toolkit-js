import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const sessionSliceName = "session";

export const initialState = {
  authenticated: false,
  expiresAt: 0,
  autoRefresh: false,
  data: {},
};

export const AUTHENTICATE = "session/authenticate";
export const DEAUTHENTICATE = "session/deauthenticate";
export const UPDATE_AUTHENTICATION = "session/updateAuthentication";

export const sessionSlice = createSlice({
  name: sessionSliceName,
  initialState,
  reducers: {
    [AUTHENTICATE]: (state, action) => {
      const { data, expiresAt, autoRefresh } = action.payload;
      state.authenticated = true;
      state.data = data;
      state.expiresAt = expiresAt;
      state.autoRefresh = autoRefresh;
    },
    [DEAUTHENTICATE]: (state) => {
      state.authenticated = false;
      state.data = {};
      state.expiresAt = 0;
      state.autoRefresh = false;
    },
    [UPDATE_AUTHENTICATION]: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const authenticate = sessionSlice.actions[AUTHENTICATE];
export const deauthenticate = sessionSlice.actions[DEAUTHENTICATE];
export const updateAuthentication = sessionSlice.actions[UPDATE_AUTHENTICATION];

export const useSession = () => {
  return useSelector((state) => state[sessionSliceName]);
};

export const useAuthenticated = () => {
  const session = useSession();
  return session.authenticated;
};

export const useSessionData = () => {
  const session = useSession();
  return session.data;
};

export const useSessionExpiresAt = () => {
  const session = useSession();
  return session.expiresAt;
};

export const useSessionAutoRefresh = () => {
  const session = useSession();
  return session.autoRefresh;
};

// Selectors

export const getSession = (state) => {
  return state[sessionSliceName];
};

export const getAuthenticated = (state) => {
  return getSession(state).authenticated;
};

export const getSessionData = (state) => {
  return getSession(state).data;
};

export const getSessionExpiresAt = (state) => {
  return getSession(state).expiresAt;
};

export const getSessionAutoRefresh = (state) => {
  return getSession(state).autoRefresh;
};
