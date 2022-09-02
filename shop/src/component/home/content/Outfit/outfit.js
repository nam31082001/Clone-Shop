import './outfit.css'
import { useState } from 'react'
import Button from '../../../button/button';
const Outfit = () => {
    const [check, setCheck] = useState(true)
    setTimeout(() => {
        check ? setCheck(false) : setCheck(true)
    }, 5000);

    return (
        <div className="outfit">
          
            <h2>Outfit</h2>
            <div className="outfit-img">
                {check ?
                    <>
                        <div>
                            <img src="https://levents.asia/wp-content/uploads/2022/07/B-2-100.jpg" alt="" />
                            
                        </div>
                        <div>
                            <img src="https://levents.asia/wp-content/uploads/2022/04/A-1-nu%CC%9B%CC%83-100.jpg" alt="" />
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <img src="https://levents.asia/wp-content/uploads/2022/04/E-1-nu%CC%9B%CC%83-100.jpg" alt="" />
                              
                        </div>
                        <div>
                            <img src=" https://levents.asia/wp-content/uploads/2022/07/F-1-100-1.jpg" alt="" />
                        </div>
                    </>

                }

            </div>
            <Button/>
        </div>
    )
}
export default Outfit