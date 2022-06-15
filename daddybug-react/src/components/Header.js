import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header =(props)=> {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <Link to='/'>
                        <h1 className="logo home-header text-end text-md-start">
                            daddy bug records
                            <img src="/media/translogo2.png" alt="logo" className="img-fluid logo-img h1-logo" />
                        </h1>
                    </Link>
                    </div>
                    <div className="col-md-6">
                        <Navbar user={props}/>    
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header