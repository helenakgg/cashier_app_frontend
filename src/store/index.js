import { configureStore } from "@reduxjs/toolkit"

// @import all reducer from slices
// import usersReducer from "./slices/users"
import authReducer from "./slices/auth"
import adminProductReducer from "./slices/admin/m-product"

// @create store
const store = configureStore({
    reducer : {
        // users : usersReducer,
        auth : authReducer,
        adminProduct : adminProductReducer,
    },
})

// @export store
export default store