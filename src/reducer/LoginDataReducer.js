const LoginDataReducer = (state3, action) => {
    switch (action.type) {
        case "SET_LOGIN_USER":
            return {
                ...state3,
                loginUser: [action.payload],
                logORNot: true,
            }
            break;

        case "LOGGING_OUT":
            return {
                ...state3,
                loginUser: [],
                logORNot: false,
            }

        default:
            return {
                ...state3
            }
            break;
    }
}

export default LoginDataReducer;