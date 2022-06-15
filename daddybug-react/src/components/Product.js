import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product =(props)=> {
    return(
        <div className='col-md-3'>
            <figure className="figure fig-featured">
                <Link to={`/store/product/${props.id}`} key={props.key}>
                    <img src={props.img} alt="placeholder img" className="img-fluid figure-img" />
                </Link>
                <figcaption className="figure-caption">{props.title}</figcaption> 
                <figcaption className="figure-caption">{props.band}</figcaption>
                <figcaption className="figure-caption">price: ${props.price}</figcaption>
                <button className="btn cart-btn">add to cart</button>
            </figure>
            <Outlet/>
        </div>
    )
}

export default Product