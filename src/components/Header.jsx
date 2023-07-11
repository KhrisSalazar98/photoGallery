import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <h1 className='text-center py-4'><FontAwesomeIcon size="xl" className="me-1" icon={faCameraRetro} /> Photo Gallery</h1>
        </header>
    );
}

export default Header;