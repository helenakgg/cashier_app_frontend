import { NavigationBar } from "../komponen/Navbar"
import { ProductPage } from "../komponen/Product"

export const LandingPage = () => {

    return(
<>
        <div className="LandingPage">
            <NavigationBar/>
        </div>
        <div>
            <ProductPage/>
        </div>
</>
    )
}