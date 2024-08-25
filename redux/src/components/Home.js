import React from 'react'
import './Home.css'
const Home = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Home Components</h1>
            {/* <div className='cart'>
                <span>{props.data.length}</span>
                <i class="fa-sharp fa-solid fa-cart-plus"></i>
            </div> */}
            <div className="card">
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary" onClick={() => props.addTocartHandler({ price: '200', name: 'i-phone' })}>Add to Cart</a>
                    <a href="#" className='btn btn-warning' onClick={()=>props.removeTocartHandler()}>delete from Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Home
