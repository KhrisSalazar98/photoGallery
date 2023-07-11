import React from 'react';

const ModalViewPhoto = ({photo}) => {
    return (
        <div className="modal fade" id={`modalViewPhoto_${photo.id}`} tabIndex="-1" aria-labelledby="exampleModalViewPhoto" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
              
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body rounded-3 d-flex justify-content-center">
                        <img className='img_modal' src={photo.urls.regular} alt={photo.id} />
                        
                    </div>
                    <div className='modal-footer'>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalViewPhoto;