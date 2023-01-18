import React, { useReducer, FC, useContext, useMemo } from "react";
<<<<<<< HEAD
import { createService } from "../../service";
import { TService } from "../../service";
=======
import { useNavigate } from "react-router-dom";
import { createService } from "../../service";
import { TService } from "../../service";
import { appActions, useAppDispatch } from "../AppProvider";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
import { authActions, useAuthContext } from "../AuthProvider";
import serviceReducer from "./reducer";

interface IServiceProviderProps {
  children?: JSX.Element | JSX.Element[];
}

export interface IServiceContext {
  service: TService;
<<<<<<< HEAD
=======
  dispatch: React.Dispatch<any>;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
}

export const ServiceContext = React.createContext<IServiceContext>({
  service: {} as any,
<<<<<<< HEAD
=======
  dispatch: () => {},
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
});

export const ServiceProvider: FC<IServiceProviderProps> = ({ children }) => {
  const { dispatch: authDispatch, accessToken } = useAuthContext();
  const signOut = () => authDispatch(authActions.signOut());
  const setAccessToken = (token: string) =>
    authDispatch(authActions.setAccessToken(token));

  const service = useMemo(
    () => createService(signOut, accessToken, setAccessToken),
    []
  );

<<<<<<< HEAD
  const [state] = useReducer(serviceReducer, { service });

  return (
    <ServiceContext.Provider value={state}>{children}</ServiceContext.Provider>
=======
  const [state, dispatch] = useReducer(serviceReducer, {
    service,
    dispatch: () => {},
  });

  return (
    <ServiceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ServiceContext.Provider>
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  );
};

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error("useServiceContext must be used within a ServiceProvider");
  }
  return context;
};
