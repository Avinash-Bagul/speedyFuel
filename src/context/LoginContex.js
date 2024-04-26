import { createContext, useContext, useEffect, useReducer } from "react";
import LoginDataReducer from "../reducer/LoginDataReducer";

const LoginContex = createContext();

const getLoginData = () => {
    const localLoginData = localStorage.getItem("loggedUser");
    const loginDataRef = [];
    if (localLoginData === loginDataRef || localLoginData === null) {
        return []
    }
    else {
        return JSON.parse(localLoginData);
    }
}

const getLogOrNotData = () => {
    const localLoginOrNotData = localStorage.getItem("loggedUser");
    const LoginOrNotDataRef = [];
    if (localLoginOrNotData === null || localLoginOrNotData === LoginOrNotDataRef ) {
        return false;
    }
    else {
        return true;
    }
}
const initialData = {
    loginUser: getLoginData(),
    logORNot: getLogOrNotData(),
}
const LoginDataProvider = ({children}) => {
    const [state3, dispatch] = useReducer(LoginDataReducer, initialData);

    const setLogintrue = (val) => {
        dispatch({type: "SET_LOGIN_USER", payload: val});
    }

    const logOut = () => {
        dispatch({type: "LOGGING_OUT" });
    }

    useEffect(()=>{
        localStorage.setItem("loggedUser", JSON.stringify(state3.loginUser));
        localStorage.setItem("logORNot", JSON.stringify(state3.logORNot));
    }, [state3.loginUser, state3.logORNot])

    return <LoginContex.Provider value={{...state3, setLogintrue, logOut}}>{children}</LoginContex.Provider>
}

const useGlobalLoginData = () => {
    return useContext(LoginContex);
}

export {LoginContex, LoginDataProvider, useGlobalLoginData};