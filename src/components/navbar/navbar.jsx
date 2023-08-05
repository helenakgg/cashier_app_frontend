import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import logo from '../../assets/cashierlogo2.png';

export default function NavbarHeader (){
    // @hooks
    const navigate = useNavigate()
    const { username } = useSelector(state => {
        return {
            username : state.auth?.username
        }
    })
    return (
        <Navbar
            fluid
            rounded
            >
            <Navbar.Brand onClick={()=>{navigate("/")}} >
                <img
                alt="Logo"
                className="mr-3 h-6 sm:h-9"
                src={logo}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Cashier App
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                inline
                label={
                    <div className="flex flex-wrap gap-2">
                        <Avatar className="placeholder" rounded/>
                        {/* <span>{username[0]?.toUpperCase()}</span> */}
                    </div>
                    //<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>
                }
                >
                <Dropdown.Header>
                    <span className="block text-sm">
                    Bonnie Green
                    </span>
                    <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                    </span>
                </Dropdown.Header>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    Sign out
                </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                active
                href="#"
                >
                <p>
                    Home
                </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                About
                </Navbar.Link>
                <Navbar.Link href="#">
                Services
                </Navbar.Link>
                <Navbar.Link href="#">
                Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
      

        // <nav className="bg-white border-gray-200 dark:bg-gray-900">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <a onClick={()=>navigate("/")} className="flex items-center cursor-pointer">
        //         <img
        //             src={logo}
        //             className="h-8 mr-3"
        //             alt="Cashier App Logo"
        //         />
        //         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        //             Cashier App
        //         </span>
        //         </a>
        //         <div className="flex items-center md:order-2">
        //         <button
        //             type="button"
        //             className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        //             id="user-menu-button"
        //             aria-expanded="false"
        //             data-dropdown-toggle="user-dropdown"
        //             data-dropdown-placement="bottom"
        //         >
        //             <span className="sr-only">Open user menu</span>
        //             <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        //                 <span class="font-medium text-gray-600 dark:text-gray-300">JL</span>
        //             </div>
        //             {/* <img
        //             className="w-8 h-8 rounded-full"
        //             src="/docs/images/people/profile-picture-3.jpg"
        //             alt="user photo"
        //             /> */}
        //         </button>
        //         {/* Dropdown menu */}
        //         <div
        //             className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        //             id="user-dropdown"
        //         >
        //             <div className="px-4 py-3">
        //             <span className="block text-sm text-gray-900 dark:text-white">
        //                 Bonnie Green
        //             </span>
        //             <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
        //                 name@flowbite.com
        //             </span>
        //             </div>
        //             <ul className="py-2" aria-labelledby="user-menu-button">
        //             <li>
        //                 <a
        //                 href="#"
        //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        //                 >
        //                 Dashboard
        //                 </a>
        //             </li>
        //             <li>
        //                 <a
        //                 href="#"
        //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        //                 >
        //                 Sign out
        //                 </a>
        //             </li>
        //             </ul>
        //         </div>
        //         <button
        //             data-collapse-toggle="navbar-user"
        //             type="button"
        //             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //             aria-controls="navbar-user"
        //             aria-expanded="false"
        //         >
        //             <span className="sr-only">Open main menu</span>
        //             <svg
        //             className="w-5 h-5"
        //             aria-hidden="true"
        //             xmlns="http://www.w3.org/2000/svg"
        //             fill="none"
        //             viewBox="0 0 17 14"
        //             >
        //             <path
        //                 stroke="currentColor"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //                 strokeWidth={2}
        //                 d="M1 1h15M1 7h15M1 13h15"
        //             />
        //             </svg>
        //         </button>
        //         </div>
        //         <div
        //         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        //         id="navbar-user"
        //         >
        //         <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //             <li>
        //             <a
        //                 href="#"
        //                 className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 md:dark:text-yellow-500"
        //                 aria-current="page"
        //             >
        //                 Home
        //             </a>
        //             </li>
        //             <li>
        //             <a
        //                 href="#"
        //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        //             >
        //                 About
        //             </a>
        //             </li>
        //             <li>
        //             <a
        //                 href="#"
        //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        //             >
        //                 Services
        //             </a>
        //             </li>
        //             <li>
        //             <a
        //                 href="#"
        //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        //             >
        //                 Pricing
        //             </a>
        //             </li>
        //             <li>
        //             <a
        //                 href="#"
        //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        //             >
        //                 Contact
        //             </a>
        //             </li>
        //         </ul>
        //         </div>
        //     </div>
        // </nav>

    )
}
