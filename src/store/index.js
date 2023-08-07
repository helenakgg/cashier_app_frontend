import { configureStore } from "@reduxjs/toolkit"

// @import all reducer from slices
import authReducer from "./slices/auth"
import adminCashierReducer from "./slices/admin/m-cashier"
import adminProductReducer from "./slices/admin/m-product"

// @create store
const store = configureStore({
    reducer : {
        auth : authReducer,
        adminCashier : adminCashierReducer,
        adminProduct : adminProductReducer,
    },
})

// @export store
export default store