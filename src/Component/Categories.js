import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../utils/constants'

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories : []

        }
    }
    componentDidMount() {
        axios
        .get(API_URL + "categories")
        .then(res => {
            const categories = res.data;
            this.setState({ categories });
        })
        .catch(err => {
            console.log(err);
        })
    }
  render() {
    const { categories } = this.state
    const { changeCategory, categoriesOn } = this.props
    return (
      <div className='Listgroup'>
        {categories.map(category => (
          <div className={categoriesOn === category.nama && "category-active border-2 bg-slate-200"} style={{cursor: 'pointer'}}
          onClick={() => changeCategory(category.nama)}
          key={category.id}> 
            {category.nama}</div>
        ))}
      </div>
    )
  }
}
