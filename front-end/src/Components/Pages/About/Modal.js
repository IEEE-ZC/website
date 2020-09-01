/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const Modal = () => {
    return (
        <div className="modal  fade" id="centralModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
                {/* <!-- Content --> */}
                <div className="modal-content">
                    {/* <!-- Header --> */}
                    <div className="modal-header">
                        <p className="heading lead">Youtube Video</p>

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="white-text">&times;</span>
                        </button>
                    </div>

                    {/* <!-- Body --> */}
                    <div className="modal-body">
                        <iframe width='100%' height="400px"
                            src="https://www.youtube.com/embed/Fv2-LD0Nbgw">
                        </iframe>
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="modal-footer">

                        <button type="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal
