import { useEffect, useRef, useState } from 'react'

import './header.css'
import ShopMenu from './shopMenu/shopMenu';
import Search from './srearch/Search';
import Cart from './cart/cart';
const Header = () => {
    const scroll = useRef(null);
    const shopMenu = "1";
    const shop = "2"
    const [iconSearch, setIconSearch] = useState(false)
    const [iconCart, setIconCart] = useState(false)


    const handleClickIconSearch = () => {
        if (iconCart === true) {
            setIconCart(false)
        }
        setIconSearch(!iconSearch)
    }
    const handleClickIconCart = () => {
        if (iconSearch === true) {
            setIconSearch(false)
        }
        setIconCart(!iconCart)
    }
    const CloseCart=()=>{
        setIconCart(false)
    }
    const CloseSearch=()=>{
        setIconSearch(false)
    }



    return (
        <div className="header">
            <div className="header-title">
                <div><h1>Levents</h1></div>

                <div className="header-title-icon">
                    <p>
                        <i class="fal fa-bell fa-2x"></i>
                        <i class="fal fa-shopping-cart fa-2x " onClick={() => handleClickIconCart()}></i>
                        <i class="fal fa-smile-beam fa-2x" ></i>
                        <i class="fal fa-search fa-2x" onClick={() => handleClickIconSearch()}></i>
                    </p>
                </div>
            </div>
            {iconSearch && <Search CloseSearch={CloseSearch} />}
            {iconCart && <Cart CloseCart={CloseCart} />}
            <div className="header-menu" ref={scroll}>
                <a href="#">
                    <span>Trang chủ</span>
                </a>
                <a href="#">
                    <span>Sản Phẩm</span><ShopMenu check={shopMenu} />
                </a>

                <a href="#">
                    <span>Outfit</span>
                </a>
                <a href="#">
                    <span>Bộ sưu Tập</span>
                </a>
                <a href="#">
                    <span>Blog</span>
                </a>
                <a href="#">
                    <span>Liên Hệ</span>
                </a>
                <a href="#">
                    <span>Chăm Sóc Khách Hàng</span><ShopMenu check={shop} />
                </a>
            </div>
        </div >
    )
}
export default Header