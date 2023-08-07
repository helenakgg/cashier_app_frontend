import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api.instance";
import Toast from "react-hot-toast";

export const getProductList = createAsyncThunk(
    "admin/m-product",
    async (payload, { rejectWithValue }) => {
        try {
            // @generate parameter
            const { id_cat, sort, page, search } = payload
            const PARAMETER = `id_cat=${id_cat}&sort=${sort}&page=${page}&search=${search}`

            // @request to get product list
            const { data } = await api.get("/admin/m-product?" + encodeURI(PARAMETER))
            
            // @return data
            return data.result
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data.message)
            return rejectWithValue(error.response ? error.response.data : error)
        }
    }
)