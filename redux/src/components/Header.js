import React from 'react'
import './Home.css'
const Header = ({data}) => {
    return (
        <div>
            <div className='cart'>
                <span>{data.length}</span>
                <i class="fa-sharp fa-solid fa-cart-plus"></i>
            </div>
        </div>
    )
}

export default Header
