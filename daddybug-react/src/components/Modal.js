import React from 'react'

const Modal =(props)=> {
    return (
        <div className="modal fade signin-modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content sign-in-modal">
                <div className="modal-header">
                    <h2 className="modal-title">sign in to your account</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action="" className="modal-form sign-in-form">
                        <div className="mb-3">
                            <label for="usernameField" id="usernameLabel" className="form-label">username</label>
                            <input type="text" id="usernameField" value="" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="passwordField" id="passwordLabel" className="form-label">password</label>
                            <input type="password" id="passwordField" value="" className="form-control" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary modal-button" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary modal-button" id='modalBtn' onClick={props.handleClick}>sign in</button>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Modal