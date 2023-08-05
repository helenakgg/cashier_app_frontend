import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

// @import page
import LoginPage from "./pages/auth/login";
import ForgotPasswordPage from "./pages/auth/forgot-password";
import ResetPasswordPage from "./pages/auth/reset-password";
import AdminPage from "./pages/admin";
import AdminCashierPage from "./pages/admin/m-cashier";
import AdminCategoryPage from "./pages/admin/m-category";
import AdminProductPage from "./pages/admin/m-product";
import NotFoundPage from "./pages/not-found";

// @import component
import ProtectedRoute from "./protected.routes"
import NavbarHeader from "./Component/navbar/navbar";

// @import action
import { keepLogin } from "./store/slices/auth/slices"

function App() {
    // @hooks
	const dispatch = useDispatch()
	const { isKeepLoginLoading } = useSelector(state => {
		return {
			isKeepLoginLoading : state.auth?.isKeepLoginLoading
		}
	})

	// @side effect
	useEffect(() => {
		dispatch(keepLogin())
	}, [])

	if (isKeepLoginLoading) return (
		<div className="h-screen w-screen flex flex-row align-bottom justify-center">
			<span className="loading loading-dots loading-lg"></span>
		</div>
	)

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-yellow-50 to-transparent dark:from-yellow-900">
			<NavbarHeader/>
			<Routes>
				<Route 
					path="/" 
					element={
						<ProtectedRoute>
							<AdminPage/>
						</ProtectedRoute>
					} 
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
				<Route path="/reset-password" element={<ResetPasswordPage/>} />
				<Route path="/admin/m-cashier" element={<AdminCashierPage/>} />
				<Route path="/asdmin/m-category" element={<AdminCategoryPage/>} />
				<Route path="/admin/m-product" element={<AdminProductPage />} />
				<Route path="*" element={<NotFoundPage/>} />

			</Routes>
			<Toaster/>

        </div>
    );
    }

export default App;
