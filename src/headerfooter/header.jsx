import React from 'react';

import Logo from '../assets/img/logo.svg';


function Header() {
    return ( 
        <header>
            <div className="container">
                <div className="headerRow">
                    <div className="headerLeft">
                        <a href="#" className="navBrand">
                            <img src={Logo} alt="Unifans" />
                        </a>
                    </div>
                    <div className="headerRight">
                        {/* <div className="headerGroupBtn">
                            <a href="#" className='fan'>Fan</a>
                            <a href="#" className='contentCreator'>Content Creator</a>
                        </div> */}
                        <a href="#" className='login'>Login</a>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;