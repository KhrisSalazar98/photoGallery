import React from 'react';

const Loading = () => {
    return (
        <div className="modalBackground">
            <div className='modalContainer d-flex justify-content-center align-items-center flex-column'>
                <div className="custom-loader"></div>
                <p className='mt-4 text-white txt_loading'>Cargando...</p>
            </div>                         
        </div>
    )
}

export default Loading;