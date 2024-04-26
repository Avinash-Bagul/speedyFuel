import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/SignUpReducer";

const SignUpContext = createContext();


const getAccountData = () => {
    const localData = localStorage.getItem("accountData");
    const dataRef = [];
    if (localData === dataRef || localData === null) {
        return []
    }
    else {
        return JSON.parse(localData);
    }
}

const intialstate = {
    TotalAccounts: "",
    account: getAccountData(),
}
const SignUpProvider = ({ children }) => {
    const [state1, dispatch] = useReducer(reducer, intialstate);

    const CreateAccount = (val) => {
        dispatch({ type: "SET_ACCOUNT_DATA", payload: val });
    }

    useEffect(() => {
        localStorage.setItem("accountData", JSON.stringify(state1.account));
    }, [state1.account]);

    return <SignUpContext.Provider value={{ ...state1, CreateAccount }}>{children}</SignUpContext.Provider>
}

const useGlobalSignUpContext = () => {
    return useContext(SignUpContext);
}

export { SignUpContext, SignUpProvider, useGlobalSignUpContext };