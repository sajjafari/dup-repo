import React, { useReducer, FC, useContext, useMemo } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { createService } from "../../service";
import { TService } from "../../service";
=======
import { useNavigate } from "react-router-dom";
import { createService } from "../../service";
import { TService } from "../../service";
import { appActions, useAppDispatch } from "../AppProvider";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import { createService } from "../../service";
import { TService } from "../../service";
>>>>>>> 6640d72 (OTAT-154 Add profile page)
import { authActions, useAuthContext } from "../AuthProvider";
import serviceReducer from "./reducer";

interface IServiceProviderProps {
  children?: JSX.Element | JSX.Element[];
}

export interface IServiceContext {
  service: TService;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  dispatch: React.Dispatch<any>;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
}

export const ServiceContext = React.createContext<IServiceContext>({
  service: {} as any,
<<<<<<< HEAD
<<<<<<< HEAD
=======
  dispatch: () => {},
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
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
=======
  const [state] = useReducer(serviceReducer, { service });

  return (
    <ServiceContext.Provider value={state}>{children}</ServiceContext.Provider>
>>>>>>> 6640d72 (OTAT-154 Add profile page)
  );
};

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error("useServiceContext must be used within a ServiceProvider");
  }
  return context;
};
