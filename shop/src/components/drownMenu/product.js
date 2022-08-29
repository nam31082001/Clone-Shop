import '../drownMenu/product.css'
const Dropdown = () => {
    return (
        <>
            <div className="DropdownProduct">
                <p>Tất Cả</p>
                <p> Quần</p>
                <p>Áo Thun</p>
                <p>BaLo</p>
                <p>Phụ Kiện</p>
                <p>BTS <i class="fal fa-angle-down"></i>
                    <div className='bts'>
                        <p>san Pham 1</p>
                        <p>san Pham 1</p>
                        <p>san Pham 1</p>
                    </div>
                </p>
            </div>
        </>

    )
}
export default Dropdown