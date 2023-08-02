import React, { Component } from 'react'
import { numberWithCommas } from '../utils/utils';

export default class Results extends Component {
  render() {
    const { keranjangs } = this.props;

    return (
        <div className=''>
        {keranjangs.length !== 0 && (
            <div>
             {keranjangs.map((menuKeranjang => (
                 <div className='border-2'>
                  <ul>
                    <li>{menuKeranjang.jumlah}</li>
                    <li>{menuKeranjang.product.nama}</li>
                    <li className='text-bold'>Rp. {numberWithCommas(menuKeranjang.totalHarga)}</li>
                  </ul>
                 </div>
                 )))}
            </div>
        )}
        </div>
    )
  }
}
