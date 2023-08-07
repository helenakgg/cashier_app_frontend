import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute ({
    children
}) {
    const { userId } = useSelector(state => {
        return {
            userId : state.auth.userId
        }
    })
    return userId ? children : <Navigate to="/login" replace/>
}