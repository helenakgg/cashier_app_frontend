import * as Yup from "yup"

// @login validation
export const loginValidationSchema = Yup.object({
    username : Yup.string()
        .required("Username is required."),
    password : Yup.string()
        .required("Password is required.")
})