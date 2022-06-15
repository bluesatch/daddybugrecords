import React from "react";

import Product from './Product'

const Home=(props)=> {

    const arr = props.props

    const featuredProducts = arr.filter(item => {
        return item.comments === 'featured'
    }).map(item => {
        return (
                <Product 
                    key={item.album_id}
                    id={item.album_id}
                    title={item.title}
                    band={item.band}
                    img={item.img}
                    label={item.label}
                    year={item.year}
                    price={item.price}
                    comments={item.comments}
                />
        )
    })

    const usedProducts = arr.filter(item => {
        return item.comments === 'used'
    }).map(item => {
        return (
                <Product 
                    key={item.album_id}
                    id={item.album_id}
                    title={item.title}
                    band={item.band}
                    img={item.img}
                    label={item.label}
                    year={item.year}
                    price={item.price}
                    comments={item.comments}
                />
        )
    })

    const newProducts = arr.filter(item => {
        return item.comments === 'new'
    }).map(item => {
        return (
                <Product 
                    key={item.album_id}
                    id={item.album_id}
                    title={item.title}
                    band={item.band}
                    img={item.img}
                    label={item.label}
                    year={item.year}
                    price={item.price}
                    comments={item.comments}
                />
        )
    })

    return (
        <div>
            <main className="main main-home">
                <div className="container">
                    <div className="banner-div shadow">
                        <img src="media/photo5.jpeg" alt="stack of albums" className="img-fluid banner-img" />
                    </div>
                </div>
                <section className="section section-home section-featured">
                    <div className="container">
                        <h2 className="section-h2 text-center text-md-start">our featured items!</h2>
                        <div className="row d-flex flex-direction-row justify-content-between">
                            {featuredProducts} 
                        </div>
                    </div>
                </section>
                <section className="section section-home section-used">
                    <div className="container">
                        <h2 className="section-h2 text-center text-md-start">our used!</h2>
                        <div className="row">
                        {usedProducts}
                        </div>
                    </div>
                </section>
                <section className="section section-home section-new">
                    <div className="container">
                        <h2 className="section-h2 text-center text-md-start">our new!</h2>
                        <div className="row">
                            {newProducts}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home