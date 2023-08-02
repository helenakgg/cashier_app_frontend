import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="bg-yellow-400 h-20 justify-around items-center flex sticky top-0">
                <div className="">
                    <ul className="unOrderList flex text-[23px] p-2 cursor-pointer ">
                        <li className="p-2 bg-white rounded">AppCashier</li>
                        <li className="p-2 hover:text-white">Home</li>
                        <li className="p-2 hover:text-white">About</li>
                        <li className="p-2 hover:text-white">Contact</li>

                        <ul className="unOrderList text-[23px] p-2">
                            <li className=" hover:bg-black hover:text-white  rounded px-2">Login</li>
                        </ul>
                    </ul>
                </div>
            </div>)
    }
}