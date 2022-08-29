import Dropdown from "./drownMenu/product"
import {useState} from 'react'

const HeaderMenu = () => {

    return (
        <div class="HeaderMenu">

            <a ><button type="button" class="btn btn-outline-secondary">Trang Chủ</button></a>
            <a><button type="button" class="btn btn-outline-secondary">Sản Phẩm<i class="fal fa-angle-down"></i></button><Dropdown/></a>
            <a><button type="button" class="btn btn-outline-secondary">Bộ sưu tập</button></a>
            <a><button type="button" class="btn btn-outline-secondary">Outfit</button></a>
            <a><button type="button" class="btn btn-outline-secondary">Blog</button></a>
            <a><button type="button" class="btn btn-outline-secondary">Liên Hệ</button></a>
            <a><button type="button" class="btn btn-outline-secondary">Chăm Sóc Khách Hàng <i class="fal fa-angle-down"></i></button></a>
        </div>
    )
}

export default HeaderMenu