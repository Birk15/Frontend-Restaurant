import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/navbar.css'
import { HOME_ROUTE, MITTAGSTISCH_ROUTE, GASTHAUS_ROUTE, SCHATZKARTE_ROUTE, GETRÄNKEKARTE_ROUTE, RESERVIEREN_ROUTE } from "../constanten/const";

const MyNavbar = () => {
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    }

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleRezise = () => {
        const wth = window.innerWidth;
        const hgt = window.innerHeight;
        setWidth(wth);
        setHeight(hgt);
    }

    window.addEventListener('resize', handleRezise)

    return (
        <div className='navbar'>
            <p className='showWidth'>{`${width}px x ${height}px`}</p>
            <div className='navbar-items'>
                <div style={{width: 34}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                        <path d="M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
                        <path d="M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                    </svg>
                </div>
                <ul className={`links ${isActive ? 'active' : ''}`}>
                    <li><button onClick={() => navigate(HOME_ROUTE)}>HOME</button></li>
                    <li><button onClick={() => navigate(MITTAGSTISCH_ROUTE)}>MITTAGSTISCH</button></li>
                    <li><button onClick={() => navigate(GASTHAUS_ROUTE)}>DAS GASTHAUS</button></li>
                    <li><button onClick={() => navigate(SCHATZKARTE_ROUTE)}>SCHATZKARTE</button></li>
                    <li><button onClick={() => navigate(GETRÄNKEKARTE_ROUTE)}>GETRÄNKEKARTE</button></li>
                    <li><button onClick={() => navigate(RESERVIEREN_ROUTE)}>RESERVIEREN</button></li>
                </ul>
                <div className='menu toggle-btn' onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#00eaff">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default MyNavbar;


