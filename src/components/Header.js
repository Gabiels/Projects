import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                </a>
            </div>
            <div className='header--user'>
                <a href="/">
                    <img src="https://i.pinimg.com/564x/4e/de/18/4ede183c652eb8b7c3dc23632c7c2e02.jpg" alt="Usuario" />
                </a>
            </div>
        </header>
    )
}