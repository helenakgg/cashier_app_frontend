import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Formik } from "formik"
import { forgotPassword } from "../../../store/slices/auth/slices"
import { forgotPasswordValidationSchema } from "../../../store/slices/auth/validation"
import logo from "../../../assets/cashierlogo2.png"

function ForgotPasswordPage(){
    const navigate=useNavigate()
    const dispatch=useDispatch()

    return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                onClick={()=>{navigate("/")}}
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
                    Forgot Password
                </h2>
                <h3 className="my-5 text-sm leading-tight tracking-tight text-gray-900 dark:text-white">
                    Enter your email address and we'll send you a link to create a new password.
                </h3>
                < Formik
                    initialValues={{ email : "" }}
                    validate={values => {
                        try {
                            forgotPasswordValidationSchema.validateSync(values)
                            return {}
                        } catch (error) {
                            console.log("error", error?.message)
                            return { message : error?.message }
                        }
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(forgotPassword(values))
                        setSubmitting(false)
                    }}
                >
                     {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                        <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                            Send
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

export default ForgotPasswordPage