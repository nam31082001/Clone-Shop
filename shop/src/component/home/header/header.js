import { useEffect, useLayoutEffect, useRef } from 'react'
import './header.css'

const Header = () => {
    const inputEl = useRef(null);
  
    return (
        <div className="header">
            <div className="header-title">
                <div><h1>Levents</h1></div>
                <div className="header-title-icon">
                    <p>
                        <i class="fal fa-bell fa-2x"></i>
                        <i class="fal fa-shopping-cart fa-2x"></i>
                        <i class="fal fa-smile-beam fa-2x"></i>
                        <i class="fal fa-search fa-2x"></i>
                    </p>
                </div>
            </div>
            <div className="header-menu" ref={inputEl}>
                <a href="#">
                    <span>Trang chủ</span>
                </a>
                <a href="#">
                    <span>Sản Phẩm</span>
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
                    <span>Chăm Sóc Khách Hàng</span>
                </a>
            </div>
        </div>
    )
}
export default Header