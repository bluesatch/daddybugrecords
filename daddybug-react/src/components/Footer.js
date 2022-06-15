import React from 'react'

import {FaFacebookSquare, FaInstagram, FaTwitter, FaEnvelope} from 'react-icons/fa'

const Footer =()=> {
    return (
    <footer className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="footer-header">daddy bug records</h2>
                    <div className="address">
                        <ul className="address-list text-center text-md-start">
                            <li className="address-item">8507 Queens Blvd</li>
                            <li className="address-item">Jackson, Ms 39222</li>
                            <li className="address-item">601-777-9311</li>
                            <li className="address-item"><a href="mailto:satchwerk@gmail.com"> Email! <FaEnvelope /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2 className="footer-header">our hours</h2>
                    <ul className="hours-list text-center text-md-start">
                        <li className="hours-item">Mon - Fri: 9:00am to 7:00pm</li>
                        <li className="hours-item">Sat: 9:00am to 9:00pm</li>
                        <li className="hours-item">Sun: 12:00pm to 6:00pm</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2 className="footer-header">join the loveliness!</h2>
                    <ul className="socials-list nav justify-content-evenly">
                        <li className="socials-item nav-item"><FaFacebookSquare /></li>
                        <li className="socials-item nav-item"><a href="https://www.instagram.com/djdaddybug/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
                        <li className="socials-item nav-item"><FaTwitter /></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p className="colophon">site by satchwerk&copy;2022</p>
            </div>
        </div> 
    </footer>
    )
}

export default Footer