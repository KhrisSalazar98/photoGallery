import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { readPhotos, searchPhotos } from '../redux/features/photo/photoSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import Loading from './Loading';

const PhotoList = () => {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    const {photoData, loading} = useSelector((state) => state.photo);

    useEffect(() => {
        dispatch(readPhotos());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchPhotos(search));
        setSearch("");
        
    }


    return (
        <>
            
            {loading ? (
                <Loading />
            ):
                <>
                    <div className='container my-5'>
            
                        <div className="mb-3 my-lg-5">
                            <form onSubmit={handleSubmit} className='d-flex justify-content-center' >
                                <input onChange={(e) => setSearch(e.target.value)} className="border-0 px-2 px-sm-3 py-2 rounded-start w-75 input_search" type="text" placeholder='Buscar por nombre' />
                                <button type='submit' className='border-0 px-2 px-sm-3 py-2 rounded-end btn_search'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            </form>
                        </div>
                        <br />

                        <div className='row mt-lg-5'>
                            {
                                photoData && photoData.length >= 1 ?

                                    photoData
                                    .map((photo, index) => (
                                        <div key={index} className='col-2 col-sm-2 col-lg-2 mb-2 px-0 d-flex justify-content-center'>
                                            <img className='rounded-2 img_regular' src={photo.urls.regular} alt={index} />
                                        </div>
                                    ))
                                :(
                                    <p className='text-center txt_not_found'><FontAwesomeIcon size="xl" className='me-1' icon={faCircleExclamation} />No se han encontrado resultado de búsqueda.</p>
                                )
                                
                            }
                        </div>

                    </div>
                </>
            }
        
        </>
        
    )
}

export default PhotoList;