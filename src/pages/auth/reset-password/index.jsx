import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Formik } from "formik"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { resetPassword } from "../../../store/slices/auth/slices"
import { resetPasswordValidationSchema } from "../../../store/slices/auth/validation"
import logo from "../../../assets/cashierlogo2.png"

export default function ResetPasswordPage(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const { uuid } = useParams()

    const eye = <AiFillEye />;
    const eyeInvisible = <AiFillEyeInvisible />;
    const [passwordShown, setPasswordShown] = useState({value : false, field_name : ""});


    return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                onClick={() => navigate("/")}
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white cursor-pointer"
                >
                <img
                    className="w-8 h-8 mr-2"
                    src={logo}
                    alt="logo"
                />
                Cashier App
                </a>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Reset Password
                </h2>
                <Formik
                    initialValues={{ token : "", newPassword : "", confirmPassword : "" }}
                    validate={values => {
                        try {
                            resetPasswordValidationSchema.validateSync(values)
                            return {}
                        } catch (error) {
                            console.log("error", error?.message)
                            return { message : error?.message }
                        }
                    }}
                    onSubmit={(values, actions) => {
                        const payload = {
                            uuid: uuid,
                            ...values,
                        };

                        dispatch(resetPassword(payload))
                            .unwrap()
                            .then(() => {
                                actions.setSubmitting(false);
                                navigate("/login");
                            })
                            .catch((error) => {
                                console.error(error);
                                actions.setSubmitting(false);
                                // Handle error and show appropriate message
                            });
                    }}
                >
                {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                    <div>
                    <label
                        htmlFor="token"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        OTP
                    </label>
                    < div className="relative">
                        <input
                            type={passwordShown.value && passwordShown.field_name === "token" ? "text" : "password"}
                            name="token"
                            id="token"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={values.token} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                        />
                        <button type="button"
                            onClick={()=>{
                                setPasswordShown({value : !passwordShown.value, field_name : "token"})
                                }}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
                                {passwordShown.value && passwordShown.field_name === "token" ? eye : eyeInvisible}
                        </button>    
                    </div>
                    </div>
                    <div>
                    <label
                        htmlFor="newPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        New Password
                    </label>
                    < div className="relative">
                        <input
                            type={passwordShown.value && passwordShown.field_name === "newPassword" ? "text" : "password"}
                            name="newPassword"
                            id="newPassword"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={values.newPassword} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                        />
                        <button type="button"
                            onClick={()=>{
                                setPasswordShown({value : !passwordShown.value, field_name : "newPassword"})
                                }}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
                                {passwordShown.value && passwordShown.field_name === "newPassword" ? eye : eyeInvisible}
                        </button>
                    </div>
                    </div>
                    <div>
                    <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Confirm password
                    </label>
                    < div className="relative">
                        <input
                            type={passwordShown.value && passwordShown.field_name === "confirmPassword" ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={values.confirmPassword} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                        />
                        <button type="button"
                            onClick={()=>{
                                setPasswordShown({value : !passwordShown.value, field_name : "confirmPassword"})
                                }}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
                                {passwordShown.value && passwordShown.field_name === "confirmPassword" ? eye : eyeInvisible}   
                        </button>
                    </div>
                    </div>
                    <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                    Reset passwod
                    </button>
                    {
                        errors.message && (
                            <div className="mt-6 mb-4">
                                <div
                                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                                role="alert"
                                >
                                    <span className="font-medium">{ errors.message }</span>
                                </div>
                            </div>
                        )
                    }               
                </form>
                )}
                </Formik>
                </div>
            </div>
    )
}
