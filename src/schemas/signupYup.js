import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    userName: Yup.string().min(2).max(20).required("please Enter User Name"),
    userEmail: Yup.string().email().required("Please enter valid email"),
    userPassword: Yup.string().min(4).required("Please enter your password"),
    confirmedPass: Yup.string().required("please enter confirmed password").oneOf([Yup.ref("userPassword"), null], "Password must match")
})