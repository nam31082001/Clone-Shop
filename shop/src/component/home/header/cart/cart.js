import './cart.css'
const Cart = ({ CloseCart }) => {
    return (
        <div className="cart">
            <p onClick={() => CloseCart()}>Close</p>
            <h2>GIỏ Hàng</h2>
            <span>Tạm tính</span>
            <div className="button">
                <a>
                    <span>Thanh Toán</span>
                </a>
            </div>
            <hr />
            <p>Có thể Bạn quan tâm</p>
            <div className='product-ss'>
                <div>
                    <img src='https://levents.asia/wp-content/uploads/2022/07/z3539120036798_16a66eec2eb73f01e1bc272fb6bfb574_70169d9bb6b341debf1934136d60b7ff-150x150.jpg' alt='' />
                    <div>
                        <h5>LEVENTS® 1 MILLION TEE/ WHITE</h5>
                        <h3>333.000 vnđ</h3>
                        <div className="button">
                            <a>
                                <span>Xem Chi Tiết</span>

                            </a>
                        </div>
                    </div>
                </div><br /><hr />
                <br />
                <div>
                    <img src='https://levents.asia/wp-content/uploads/2022/08/z3604024746657_c8a7ca453f9332a2ddcff815171d73be-150x150.jpg' alt='' />
                    <div>
                        <h5>LEVENTS® 1 MILLION TEE/ WHITE</h5>
                        <h3>333.000 vnđ</h3>
                        <div className="button">
                            <a>
                                <span>Xem Chi Tiết</span>
                            </a>
                        </div>
                    </div>
                </div> <br />

                <div className="button">
                    <a>
                        <span>Xem Tất Cả</span>
                    </a>
                </div>

            </div>
        </div>
    )
}
export default Cart