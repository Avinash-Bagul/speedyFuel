import * as Yup from 'yup';

export const buyingYupSchema = Yup.object({
    fuel: Yup.string().required("Select fuel Type"),
    quantity: Yup.number().positive().min(1).max(1000000000).required("quantity in litre"),
    location: Yup.string().required("Enter delivering location"),
})