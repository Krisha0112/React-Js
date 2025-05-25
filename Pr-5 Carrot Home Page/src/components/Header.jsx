import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container top_header ">
                    <div className="navbar-brand">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png" alt="Logo" />
                    </div>

                    <div className="search-bar">

                        <input className='search' type="text" placeholder="Search for items..." />

                        <select className='select'>
                            <option value="All Categories">All Categories</option>
                            <option value="Mens">Men's</option>
                            <option value="Womens">Women's</option>
                            <option value="Electronics">Electronics</option>
                        </select>


                        <button type="submit">
                            <CiSearch />
                        </button>
                    </div>

                    <div className="navbar-right ">
                        <a href="#account" className="nav-link"> <CiUser />Account</a>
                        <a href="#wishlist" className="nav-link"><CiHeart /> Wishlist</a>
                        <a href="#cart" className="nav-link"><CiShoppingCart />Cart</a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
