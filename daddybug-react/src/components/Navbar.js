import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar=(props)=> {

const username = props.user.user
// console.log(username)
return (
    <div className="navDiv">
        <nav className="hamburger-nav d-sm-block d-md-none">
            <div id="menuToggle">
                <input type="checkbox" className="burger-checkbox"/>
                <span className="slice"></span>
                <span className="slice"></span>
                <span className="slice"></span>
                <ul className="hamburger-list list-group list-group-flush">
                    <li className="hamburger-item list-group-item">
                        <NavLink to='/store'>Store</NavLink>
                    </li>
                    <li className="hamburger-item list-group-item">
                    <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className="hamburger-item list-group-item">
                        <NavLink to="/signin">sign in</NavLink>
                    </li>
                    <li className="hamburger-item list-group-item">
                        <NavLink to='/entry'>Enter an Album</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <nav className="topNav d-none d-md-block" id="topNav">
            <ul className="nav topUl justify-content-around">
                <li className="nav-item topNav-item">
                    <NavLink to='/store' className="topNav-link">Store</NavLink>
                </li>
                <li className="nav-item topNav-item"><NavLink to='/about' className="topNav-link">About</NavLink></li>
                <li>
                    <NavLink to='/signin' className='topNav-link'>
                    <button type="button" className="btn topNav-modal-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">sign in</button>
                    </NavLink>
                </li>
                <li className="nav-item topNav-item">
                    <NavLink to='/entry' className='topNav-link'>
                        Enter an Album
                    </NavLink>
                </li>
                <li>Greetings, {username}</li>
            </ul>
        </nav>
    </div>
)
}

export default Navbar