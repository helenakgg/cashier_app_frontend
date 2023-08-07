import React from "react"
import Navbar from "../../components/navbar/navbar"
import image1 from "../../assets/spaget.jpeg"


export default function CashierPage(){
    const [nomor, setNomor] = React.useState(1);

    const handleTambah = () => {
        setNomor(nomor + 1)
    }
    const handleKurang = () => {
        setNomor(nomor - 1)

    }
    return (
        <div>
            <Navbar/>
        <div className='grid grid-cols-5 h-screen  '>
            <div className='bg-white border-2 border-yellow-400 mt-5 text-2xl '>Kategori
                <div className=' grid grid-flow-row'>
                    <div className='border-t-4 hover:bg-slate-300 border-yellow-400 h-[4rem] flex items-center justify-center cursor-pointer'>
                        Main Course
                    </div>
                    <div className='border-t-4 hover:bg-slate-300 border-yellow-400 h-[4rem] flex items-center justify-center cursor-pointer'>
                        Beverages
                    </div>
                    <div className='border-t-4 hover:bg-slate-300 border-yellow-400 h-[4rem] flex items-center justify-center cursor-pointer'>
                        Dessert
                    </div>
                    <div className='border-y-4  hover:bg-slate-300 border-yellow-400 h-[4rem] flex items-center justify-center cursor-pointer'>
                        Appetizers
                    </div>
                </div>
            </div>
            <div className='bg-white col-span-3 grid grid-cols-4 mt-4 h-fit text-2xl'>
                <div className='border-4 border-yellow-400 rounded m-1 text-left text-lg h-fit' >
                    <img
                        src={image1}
                        alt=''
                        className='h-fit w-fit rounded-xl'
                    />
                    <h1 className='font-bold'>Spagheti Bolognese</h1>
                    <p className='text-sm'>Spagheti Bolognese, There is nothing like Spagheti normaly</p>
                    <span className='text-center'>Rp. 20.000
                        <button className='ml-8 bg-black rounded w-[4rem] font-bold text-lg hover:bg-yellow-400 text-white'>Order</button>
                    </span>
                </div>
                <div className='border-4 border-yellow-400 rounded m-1 text-left text-lg h-fit' >
                    <img
                        src={image1}
                        alt=''
                        className='h-fit w-fit rounded-xl'
                    />
                    <h1 className='font-bold'>Spagheti Bolognese</h1>
                    <p className='text-sm'>Spagheti Bolognese, There is nothing like Spagheti normaly</p>
                    <span className='text-center'>Rp. 20.000
                        <button className='ml-8 bg-black rounded w-[4rem] font-bold text-lg hover:bg-yellow-400 text-white'>Order</button>
                    </span>
                </div>
                <div className='border-4 border-yellow-400 rounded m-1 text-left text-lg h-fit' >
                    <img
                        src={image1}
                        alt=''
                        className='h-fit w-fit rounded-xl'
                    />
                    <h1 className='font-bold'>Spagheti Bolognese</h1>
                    <p className='text-sm'>Spagheti Bolognese, There is nothing like Spagheti normaly</p>
                    <span className='text-center'>Rp. 20.000
                        <button className='ml-8 bg-black rounded w-[4rem] font-bold text-lg hover:bg-yellow-400 text-white'>Order</button>
                    </span>
                </div>
                <div className='border-4 border-yellow-400 rounded m-1 text-left text-lg h-fit' >
                    <img
                        src={image1}
                        alt=''
                        className='h-fit w-fit rounded-xl'
                    />
                    <h1 className='font-bold'>Spagheti Bolognese</h1>
                    <p className='text-sm'>Spagheti Bolognese, There is nothing like Spagheti normaly</p>
                    <span className='text-center'>Rp. 20.000
                        <button className='ml-8 bg-black rounded w-[4rem] font-bold text-lg hover:bg-yellow-400 text-white'>Order</button>
                    </span>
                </div>
                <div className='border-4 border-yellow-400 rounded m-1 text-left text-lg h-fit' >
                    <img
                        src={image1}
                        alt=''
                        className='h-fit w-fit rounded-xl'
                    />
                    <h1 className='font-bold'>Spagheti Bolognese</h1>
                    <p className='text-sm'>Spagheti Bolognese, There is nothing like Spagheti normaly</p>
                    <span className='text-center'>Rp. 20.000
                        <button className='ml-8 bg-black rounded w-[4rem] font-bold text-lg hover:bg-yellow-400 text-white'>Order</button>
                    </span>
                </div>
                <div className='border-4 border-yellow-400 rounded m-1 text-left text-lg h-fit' >
                    <img
                        src={image1}
                        alt=''
                        className='h-fit w-fit rounded-xl'
                    />
                    <h1 className='font-bold'>Spagheti Bolognese</h1>
                    <p className='text-sm'>Spagheti Bolognese, There is nothing like Spagheti normaly</p>
                    <span className='text-center'>Rp. 20.000
                        <button className='ml-8 bg-black rounded w-[4rem] font-bold text-lg hover:bg-yellow-400 text-white'>Order</button>
                    </span>
                </div>
                <div className='border-4 border-yellow-400 rounded m-1 text-left text-lg h-fit' >
                    <img
                        src={image1}
                        alt=''
                        className='h-fit w-fit rounded-xl'
                    />
                    <h1 className='font-bold'>Spagheti Bolognese</h1>
                    <p className='text-sm'>Spagheti Bolognese, There is nothing like Spagheti normaly</p>
                    <span className='text-center'>Rp. 20.000
                        <button className='ml-8 bg-black rounded w-[4rem] font-bold text-lg hover:bg-yellow-400 text-white'>Order</button>
                    </span>
                </div>
                <div className='border-4 border-yellow-400 rounded m-1 text-left text-lg h-fit' >
                    <img
                        src={image1}
                        alt=''
                        className='h-fit w-fit rounded-xl'
                    />
                    <h1 className='font-bold'>Spagheti Bolognese</h1>
                    <p className='text-sm'>Spagheti Bolognese, There is nothing like Spagheti normaly</p>
                    <span className='text-center'>Rp. 20.000
                        <button className='ml-8 bg-black rounded w-[4rem] font-bold text-lg hover:bg-yellow-400 text-white'>Order</button>
                    </span>
                </div>
            </div>
            <div className='bg-white text-2xl border-2 border-yellow-400 mt-5'>
                <div className=''> Order
                    <div className='grid grid-flow-row'>
                        <div className='border-y-2 border-yellow-400 flex '>
                            <img
                                src={image1}
                                alt=''
                                className='h-20 w-fit rounded-xl'
                            />
                            <h1 className='text-sm font-bold text-left ml-1 grid'>Spagheti Bolognese
                                <p className='text-sm font-normal'>Rp. 20.000</p>
                                <div className='flex items-center h-fit '>
                                    <p className='text-4xl cursor-pointer' onClick={handleTambah} >+</p>
                                    <p className='w-5 border-2'>{nomor}</p>
                                    <p className='text-4xl ml-1 cursor-pointer ' onClick={handleKurang}>-</p>
                                </div>
                            </h1>
                        </div>
                        <div className='border-y-2 border-yellow-400 flex '>
                            <img
                                src={image1}
                                alt=''
                                className='h-20 w-fit rounded-xl'
                            />
                            <h1 className='text-sm font-bold text-left ml-1 grid'>Spagheti Bolognese
                                <p className='text-sm font-normal'>Rp. 20.000</p>
                                <div className='flex items-center h-fit '>
                                    <p className='text-4xl cursor-pointer' onClick={handleTambah} >+</p>
                                    <p className='w-5 border-2'>{nomor}</p>
                                    <p className='text-4xl ml-1 cursor-pointer ' onClick={handleKurang}>-</p>
                                </div>
                            </h1>
                        </div>
                        <div className='border-y-2 border-yellow-400 flex '>
                            <img
                                src={image1}
                                alt=''
                                className='h-20 w-fit rounded-xl'
                            />
                            <h1 className='text-sm font-bold text-left ml-1 grid'>Spagheti Bolognese
                                <p className='text-sm font-normal'>Rp. 20.000</p>
                                <div className='flex items-center h-fit '>
                                    <p className='text-4xl cursor-pointer' onClick={handleTambah} >+</p>
                                    <p className='w-5 border-2'>{nomor}</p>
                                    <p className='text-4xl ml-1 cursor-pointer ' onClick={handleKurang}>-</p>
                                </div>
                            </h1>
                        </div>
                        <div className='border-y-2 border-yellow-400 flex '>
                            <img
                                src={image1}
                                alt=''
                                className='h-20 w-fit rounded-xl'
                            />
                            <h1 className='text-sm font-bold text-left ml-1 grid'>Spagheti Bolognese
                                <p className='text-sm font-normal'>Rp. 20.000</p>
                                <div className='flex items-center h-fit '>
                                    <p className='text-4xl cursor-pointer' onClick={handleTambah} >+</p>
                                    <p className='w-5 border-2'>{nomor}</p>
                                    <p className='text-4xl ml-1 cursor-pointer ' onClick={handleKurang}>-</p>
                                </div>
                            </h1>
                        </div>
                        <div className='border-y-2 border-yellow-400 flex '>
                            <img
                                src={image1}
                                alt=''
                                className='h-20 w-fit rounded-xl'
                            />
                            <h1 className='text-sm font-bold text-left ml-1 grid'>Spagheti Bolognese
                                <p className='text-sm font-normal'>Rp. 20.000</p>
                                <div className='flex items-center h-fit '>
                                    <p className='text-4xl cursor-pointer' onClick={handleTambah} >+</p>
                                    <p className='w-5 border-2'>{nomor}</p>
                                    <p className='text-4xl ml-1 cursor-pointer ' onClick={handleKurang}>-</p>
                                </div>
                            </h1>
                        </div>
                    </div>
                    <div className='grid grid-row-2 relative bottom-0'>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-bold'>Total</p>
                            <p className='text-2xl font-bold'>Rp. 50.000</p>
                        </div>
                        <div className='bg-yellow-400 hover:bg-black hover:text-white '>
                            <p className='text-2xl font-bold'>Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}