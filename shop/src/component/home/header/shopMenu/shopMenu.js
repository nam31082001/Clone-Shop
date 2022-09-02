import './shopMenu.css'
const ShopMenu = ({ check }) => {
    return (
        <>
            {check === "1" &&
                <div className="shopMenu">
                    <a href="#">
                        <span>Tất Cả</span>
                    </a>
                    <a href="#">
                        <span>New Arrival</span>
                    </a>
                    <a href="#">
                        <span>T-shift</span>
                    </a>
                    <a href="#">
                        <span>Polo</span>
                    </a>
                    <a href="#">
                        <span>Outwean</span>
                    </a>
                    <a href="#">
                        <span>Quần</span>
                    </a>
                    <a href="#">
                        <span>Balo</span>
                    </a>
                    <a href="#">
                        <span>BTS</span>
                    </a>
                </div>
            }
            {check === "2" &&
                <div className="shopMenu">
                    <a href="#">
                        <span>Chính Sách Bảo Hành</span>
                    </a>
                    <a href="#">
                        <span>Chính Sách Vận Chuyển</span>
                    </a>
                    <a href="#">
                        <span>Chính Sách MenoShip</span>
                    </a>
                    <a href="#">
                        <span>Mua Hàng && Bảo Quản</span>
                    </a>
                    <a href="#">
                        <span>Q&&A</span>
                    </a>
                </div>
            }
        </>
    )
}
export default ShopMenu