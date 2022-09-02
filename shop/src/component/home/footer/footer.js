import './footer.css'
import { FacebookOutlined, YoutubeOutlined } from '@ant-design/icons'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div>
                    <h3>VỀ CHÚNG TÔI</h3>
                    <p>Levents® – Popular Streetwear Brand</p>
                    <span>HỘ KINH DOANH Levents</span><br />
                    <span>GPKD được cấp bởi Ủy ban nhân dân Quận 1– TP Hồ Chí Minh</span><br />
                    <span>Mã số thuế: 8547618080</span><br />
                    <span>Ngày cấp: 07/12/2020</span>
                </div>
                <div>
                    <div>
                        <h4>Liên Hệ</h4>
                        <span>Hotline</span>
                        <h5>1900 633 028</h5>
                        <span>Email</span>
                        <h5>Customercare@levents.asia</h5>
                        <span>Mon - Sun</span>
                        <h5>09:30 ~ 21:30</h5>
                        <span>Email Business</span>
                        <h5>business@levents.asia</h5>
                    </div>
                    <div>
                        <h4>CỬA HÀNG</h4>
                        <span>325 Hoàng Sa, Tân Định,
                            quận 1, HCM</span><br /><br />
                        <span>The New Playground, 04 Phạm Ngũ Lão, quận 1, HCM</span><br /><br />
                        <span>842 Sư Vạn Hạnh, phường 12, quận 10, HCM</span><br /><br />
                        <span>54 Mậu Thân, Xuân Khánh, quận Ninh Kiều, Cần Thơ</span><br />

                    </div>
                    <div>
                        <h4>HỖ TRỢ</h4>
                        <span>Chính Sách Đổi Chả</span><br /><br />
                        <span>Tài Khoản</span><br /><br />
                        <span>Chính Sách Vận chuyển </span><br /><br />
                        <span>Thanh Toán Onlai</span><br /><br />
                        <span>Chính Sách Bảo Mật Thông Tin</span><br /><br />
                        <span>Bảo Hành Và Kiếu Nại</span><br /><br />


                    </div>
                    <div>

                        <h4>MỞ RỘNG</h4>
                        <span>Tuyển dụng</span><br /><br />
                        <span>Blog</span><br /><br />
                        <span>
                            <FacebookOutlined />
                            &emsp;


                        </span>
                        <span>
                            <YoutubeOutlined />
                            &emsp;
                        </span>
                    </div>


                </div>
            </div>
            <div className='footer-license'>
                <h5> Bản quyền của Levents ....</h5>
            </div>
        </>

    )
}
export default Footer