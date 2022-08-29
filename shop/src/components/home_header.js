import '../style/home-Header/home-Header.css'
import RelatedProducts from './contents-product'
import HeaderImg from './home-header-img'
import HeaderMenu from './home-header-menu'


const HomeHeader = () => {
    return (
        <>

            <div class="homeHeader">
                <h1>Akyo Shop</h1>
                <div>
                    <p> <i class="far fa-bell fa-2x"></i></p>
                    <p>  <i class="far fa-search fa-2x"></i></p>
                    <p> <i class="fal fa-shopping-cart fa-2x"></i></p>
                    <p> <i class="fal fa-smile fa-2x"></i></p>
                </div>
            </div>
            <HeaderMenu />
            <HeaderImg />
            <RelatedProducts/>

        </>

    )
}

export default HomeHeader