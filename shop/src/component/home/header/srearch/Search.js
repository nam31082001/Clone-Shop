import './search.css'
const Search = ({CloseSearch}) => {
    return (
        <div className='search'>
            <p onClick={()=>CloseSearch()}>Close</p>
            <h2>Tìm Kiếm</h2>
            <div>
                <a>KHÁC</a><a>NEW ARRVAL</a><a>POLO</a><a>TẤT CẢ</a><a>SALE</a><a>"MY ANIMALS"SERIES</a><a>SPRING/SUMMER2022</a><a>POPULAR LOGO</a><a>TEE</a><a>HOODIE</a>
                <a>SLIDES</a><a>SHORTPANTS</a><a>CAP</a><a>PANT</a><a>SWEATER</a><a>SOCK</a>
                <a>SLIPPER</a><a>T-SHIRT</a><a>QUẦN</a><a>BALO</a><a>PHỤ KIỆN</a><a>SALE</a>
                <a>BTS</a><a>OTHER</a><br />
            </div>

            <input
                placeholder='Search Top ...'
            /> 
            <div className='divBtn'>
                <div className="button">
                    <a>
                        <span>Search</span>
                    </a>
                </div>

            </div><br />
            <h5>POPULAR</h5>
            <div>
                <a>Clothing</a><a>Shirt</a><a>Sweater</a><br />
                <a>Short</a><a>Polo</a><a>Hoodie</a><br />
                <a>Blue</a><a>T-shirt</a><a>Jacket</a>
            </div>
        </div>
    )
}
export default Search