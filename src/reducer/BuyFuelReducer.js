
const BuyFuelReducer = (state2, action) => {
    let today = new Date();
    // console.log(action.payload.fuel);
    switch (action.type) {
        case "SET_ORDER_REQ":
            const setdate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
            const setStatus = "confirmed";
            // const ind = action.payload.length-1;
            console.log(state2);
            // console.log(state2.orderRequest[state2.totalOrders-1].orderid);
            let setorderid = state2.orderRequest.length + 1;
            let setTime = `${today.toLocaleTimeString()}`

            const ordersData = {
                orderid: setorderid,
                fuel: action.payload.fuel,
                quantity: action.payload.quantity,
                location: action.payload.location,
                time: setTime,
                date: setdate,
                price: action.payload.price,
                status: setStatus,
            }

            return {
                ...state2,
                orderRequest: [...state2.orderRequest, ordersData],
                totalOrders: setorderid,
            }

            break;


        case "CANCELING_ORDER":
            const setdate2 = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
            const setTime2 = `${today.toLocaleTimeString()}`

            let update = [];
            state2.orderRequest.forEach(element => {
                if (element.orderid == action.payload) {
                    element.status = 'cancelled';
                     element.cancelTime = setTime2;
                    element.cancelDate = setdate2;
                    update.push(element);
                   

                }
                else {
                    update.push(element);
                }
            });

            console.log(update);

            return {
                ...state2,
                orderRequest: update
            }

        default:
            return {
                ...state2
            }
            break;
    }
}

export default BuyFuelReducer;