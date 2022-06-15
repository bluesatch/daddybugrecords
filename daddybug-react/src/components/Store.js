import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Product from './Product'

const Store =(props)=> {

    const arr = props.props


    const productElements = arr.map(album=> {
        return (
            
                <Product 
                    key={album.album_id}
                    id={album.album_id}
                    title={album.title}
                    band={album.band}
                    img={album.img}
                    year={album.year}
                    label={album.label}
                    price={album.price}
                    comments={album.comments}
                />
        )
    })
    return (
        <main className="main main-store">
            <div className="container">
                <h2>our entire store!</h2>
                <div className="row">
                    {productElements}
                </div>
            </div>
        </main>
    )
}

export default Store