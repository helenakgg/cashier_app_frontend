import * as Yup from "yup"
import YupPassword from 'yup-password';
YupPassword(Yup);

export const loginValidationSchema = Yup.object({
    username : Yup.string()
        .required("Username is required."),
    password : Yup.string()
        .required("Password is required.")
})

export const forgotPasswordValidationSchema = Yup.object({
    email : Yup.string()
        .required("Email is required.")
})

export const resetPasswordValidationSchema = Yup.object({
    token : Yup.string()
        .required("OTP is required."),
    newPassword : Yup.string()
        .required("New Password is required.")
        .min(6, "Password must be at least 6 characters, 1 symbol, 1 uppercase.")
        .minUppercase(1, "Password must has at least 1 uppercase letter.")
        .minSymbols(1, "Password must has at least 1 symbol."),
    confirmPassword : Yup.string()
        .required("Confirm Password is required.")
        .oneOf([Yup.ref("newPassword"), null], "Password must match."),
})