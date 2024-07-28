import { createContext, useContext, useReducer, useEffect } from "react";
import BuyFuelReducer from "../reducer/BuyFuelReducer";

const BuyFuelContex = createContext();

const getBuyFuelData = () => {
    const localOrderData = localStorage.getItem("orders");
    const OrderDataRef = [];
    if (localOrderData === OrderDataRef || localOrderData === null) {
        return [];
    }
    else {
        return JSON.parse(localOrderData);
    }
}

const initialValues = {
    orderRequest: getBuyFuelData(),
    totalOrders: 1,
}

const BuyFuelProvider = ({ children }) => {
    const [state2, dispatch] = useReducer(BuyFuelReducer, initialValues);

    const takeOrder = (val) => {
        dispatch({ type: "SET_ORDER_REQ", payload: val });
    }
    const cancelOrder = (e) => {
        dispatch({type: "CANCELING_ORDER", payload: e});
    }

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(state2.orderRequest));
    }, [state2.orderRequest]);


    return <BuyFuelContex.Provider value={{ ...state2, takeOrder, cancelOrder }}> {children}</BuyFuelContex.Provider>
}

const useGlobalBuyFuel = () => {
    return useContext(BuyFuelContex);
}

export { BuyFuelContex, BuyFuelProvider, useGlobalBuyFuel };