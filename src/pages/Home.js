import React, { Component } from 'react'
import { API_URL } from '../utils/constants';
import axios from 'axios';
import swal from 'sweetalert';
import Categories from '../Component/Categories';
import Results from '../Component/Results';
import Navbar from '../Component/Navbar';
import Menus from '../Component/Menus';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            categoriesOn: 'Cemilan',
            keranjangs: []
        }
    }
    componentDidMount() {
        axios
            .get(API_URL + 'products?category.nama' + this.state.categoriesOn)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(err => {
                console.log(err);
            })

        axios
            .get(API_URL + 'keranjangs')
            .then(res => {
                const keranjangs = res.data;
                this.setState({ keranjangs });
            })
            .catch(err => {
                console.log(err);
            })
    }
    componentDidUpdate(prevState) {
        if (this.state.categoriesOn !== prevState.categoriesOn) {
            axios
                .get(API_URL + 'keranjangs')
                .then(res => {
                    const keranjangs = res.data;
                    this.setState({ keranjangs });
                })
                .catch(err => {
                    console.log(err);
                })
        }        
    }

    changeCategory = (value) => {
        this.setState({
            categoriesOn: value,
            menus: []

        })
        axios
            .get(API_URL + 'products?category.nama=' + value)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(err => {
                console.log(err);
            })
    }

    addToCart = (value) => {

        axios
            .get(API_URL + 'keranjangs?product.id=' + value.id)
            .then(res => {
                if (res.data.length === 0) {
                    const onKeranjang = {
                        product: value,
                        jumlah: 1,
                        totalHarga: value.harga
                    };

                    axios
                        .post(API_URL + 'keranjangs', onKeranjang)
                        .then(res => {
                            swal({
                                title: "Berhasil!",
                                text: "Berhasil memasukan " + onKeranjang.product.nama + " ke keranjang!",
                                icon: "success",
                            })
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    const onKeranjang = {
                        product: value,
                        jumlah: res.data[0].jumlah + 1,
                        totalHarga: res.data[0].totalHarga + value.harga
                    };

                    axios
                        .put(API_URL + 'keranjangs/' + res.data[0].id, onKeranjang)
                        .then(res => {
                            swal({
                                title: "Berhasil!",
                                text: "Berhasil memasukan " + onKeranjang.product.nama + " ke keranjang!",
                                icon: "success",
                            })
                        })
                }
            })
    }


    render() {
        const { menus, categoriesOn, keranjangs } = this.state;
        return (
                <div className='md:container md:mx-auto'>
                    <div className='justify-between grid grid-cols-5 gap-4 '>
                        <div className='bg-white text-2xl border-2 border-yellow-400 mt-5'>Kategori
                            <div><Categories changeCategory={this.changeCategory} categoriesOn={categoriesOn} /></div>
                        </div>
                        <div className='bg-white text-2xl border-2 col-span-3 border-yellow-400 mt-5'>Daftar Makanan
                            <div className='bg-white text-2xl mt-5 grid grid-cols-3'>
                                {menus && menus.map((menu => (
                                    <Menus
                                        key={menu.id}
                                        menu={menu}
                                        addToCart={this.addToCart}
                                    />
                                )))}
                            </div>
                        </div>
                        <div className='bg-white text-2xl border-2 border-yellow-400 mt-5'>Hasil
                        <Results keranjangs={keranjangs}/>
                        </div>
                    </div>
                </div>

        )
    }
}
