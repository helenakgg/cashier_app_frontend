import { createAsyncThunk } from "@reduxjs/toolkit"
import Toast from "react-hot-toast"
import api from "../../../utils/api.instance"


export const getAllCashiers = createAsyncThunk (
    "auth/admin/m-cashier",
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.get("auth/admin/m-cashier")
            Toast.success(data.message)
            return data.data.cashiers

        } catch (error) {
            Toast.error(error.response.data.message)
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const getAllDisabledCashiers = createAsyncThunk (
    "auth/admin/m-cashier/disabled",
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.get("auth/admin/m-cashier/disabled")
            Toast.success(data.message)
            return data.data.disabledCashiers

        } catch (error) {
            Toast.error(error.response.data.message)
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const createCashier = createAsyncThunk (
    "auth/admin/m-cashier/create",
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.post("auth/admin/m-cashier/create",payload)
            Toast.success(data.message)
            return data.user

        } catch (error) {
            Toast.error(error.response?.data?.message)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getCashierById = createAsyncThunk (
    "auth/admin/cashier/id",
    
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.get("auth/admin/m-cashier/" + encodeURI(payload))
            Toast.success(data.message)
            return data.data

        } catch (error) {
            Toast.error(error.response.data.message)
            return rejectWithValue(error.response.data.message)
        }
    }
)
