const SignUpReducer = (state1, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case "SET_ACCOUNT_DATA":
            return {
                ...state1,
                account: [...state1.account, action.payload],
                TotalAccounts: +1
            }
            break;

        default:
            return {
                ...state1
            }
            break;
    }

}

export default SignUpReducer;