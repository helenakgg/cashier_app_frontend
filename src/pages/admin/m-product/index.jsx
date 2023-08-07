import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductList } from "../../../store/slices/admin/m-product/slices"
import Navbar from "../../../components/navbar/navbar"

// @local component
import RenderProductCard from "./component.card"
import Pagination from "./component.pagination"

function AdminProductPage () {
    // @state and hooks
    const dispatch = useDispatch()
    const { loading, currentPage, totalPages, productList } = useSelector(state => {
        return {
            loading : state.adminProduct?.isGetProductListLoading,
            productList : state.adminProduct?.productList,
            currentPage : state.adminProduct?.currentPage,
            totalPages : state.adminProduct?.totalPages,
        }
    })

    // @side-effect
    useEffect(() => {
        dispatch(getProductList({ id_cat : "", page : "", sort : "", search : "" }))
    }, [])

    // @event handler
    const onChangePagination = (type) => {
        dispatch(getProductList({ 
            id_cat : "", 
            page : type === "prev" ? currentPage - 1 : currentPage + 1, 
            sort : "",
            search : "" 
        }))
    }

    // @render loading
    if (loading) return (
        <div className="h-screen w-screen flex flex-row align-bottom justify-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    )

    return (
        <div className="w-full h-full px-40 py-10 flex flex-row flex-wrap gap-5 justify-between ">
            <Navbar />
            <RenderProductCard productList={productList}/>
            <div className="flex flex-row w-full h-auto justify-end">
                <Pagination 
                    onChangePagination={onChangePagination}
                    disabledPrev={currentPage === 1}
                    disabledNext={currentPage >= totalPages}
                />
            </div>
        </div>
    )
}

export default AdminProductPage