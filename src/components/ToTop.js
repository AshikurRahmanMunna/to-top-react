import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ToTop = () => {
    const [hide, setHide] = useState(true);
    const changeToTopVisibility = () => {
        if (window.scrollY > 300) {
            setHide(false)
        }
        else {
            setHide(true)
        }
    }
    window.addEventListener('scroll', changeToTopVisibility);
    return (
        <div style={{display: hide ? 'none': 'block'}}>
            <div style={{ position: 'fixed', background: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: '40px', right: '40px' }}>
                <a href="#">
                    <FontAwesomeIcon style={{ color: 'black', height: '30px' }} icon={faAngleUp} />
                </a>
            </div>
        </div>
    );
};

export default ToTop;