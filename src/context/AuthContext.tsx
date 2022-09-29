import React, { createContext, useReducer } from "react";

interface userlog {
  id: string;
  name: string;
  rol: string;
  email: string;
}

interface AuthState {
  user: userlog | null;
  isLogged: boolean;
  isload: boolean;
}
interface LogData {
  user: string;
  pasword: string;
}

interface AuthContextProps {
  authState: AuthState;
  singIn: (data: LogData) => void;
  logOut: () => void;
}

const authInitialState: AuthState = {
  user: null,
  isLogged: true,
  isload: false,
};

type AuthAction =
  | { type: "logIn"; payload: { user: userlog } }
  | { type: "logOut" };

export const AuthContext = createContext({} as AuthContextProps);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logIn":
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
      };
    case "logOut":
      return authInitialState;

    default:
      return state;
  }
};

export const AuthProvider = ({ children }: any) => {
  const [authstate, dispatch] = useReducer(authReducer, authInitialState);
  const singIn = (data: LogData) => {};
  const logOut = () => {};
  return (
    <AuthContext.Provider value={{ authState: authstate, singIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
