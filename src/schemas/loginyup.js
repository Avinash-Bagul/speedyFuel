import * as Yup from 'yup';

export const loginYupSchema = Yup.object({
    email: Yup.string().email().required("Please enter valid email"),
    password: Yup.string().min(4).required("Please enter your password")
})