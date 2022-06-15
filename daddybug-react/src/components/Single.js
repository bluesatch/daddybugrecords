import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Single =()=> {

    const [album, setAlbum] = useState({})
    const params = useParams()
    console.log(params)
    const url = `http://localhost:3005/api/album/${params.id}`

    useEffect(()=> {
        axios.get(url)
            .then(res => {
                setAlbum(res.data)
            })

    }, [])
    return (
        <main className='main main-single'>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                    <img src={album.img} alt="placeholder img" className="img-fluid single-img shadow" />
                    </div>
                    <div className="col-7">
                    <h2 className="single-h2">{album.title}</h2>
                        <ul className="single-list list-group list-group-flush">
                            <li className="single-item artist-item list-group-item">{album.band}</li>
                            <li className="single-item label-item list-group-item">{album.label}</li>
                            <li className="single-item year-item list-group-item">{album.year}</li>
                            <li className="single-item price-item list-group-item">${album.price}</li>
                        </ul>
                        <button className="btn cart-btn">add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Single