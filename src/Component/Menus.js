import React from 'react'
import { numberWithCommas } from '../utils/utils';

const Menus = ({ menu, addToCart }) => {
    return (
        <div className='border-2 p-2 ' onClick={() => addToCart(menu)}>
            <div className='p-2 flex flex-col'>
                <div className='ronded-xl overflow-hidden'>
                    <img src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} alt="" />
                </div>
                <h2 className='text-2xl md:text-3xl font-medium mt-3'>{menu.nama}</h2>
                <p className='text-slate-500 text-lg mt-3'>{numberWithCommas(menu.harga)}</p>
            </div>
        </div>
    )
}
export default Menus;

