import React from 'react';

import Logo from '../assets/img/logo.svg';
import Twiter from '../assets/img/twiter.svg';
import Instagram from '../assets/img/inst.svg';
import Facebook from '../assets/img/fb.svg';
import Globe from '../assets/img/globe.svg';


function Footer() {
    return ( 
        <footer>
            <div className="container">
                <div className="footerRow">
                    <div className="footerCol">
                        <div className="footerAbout">
                            <a href="#"><img src={Logo} alt="Unifans" /></a>
                            <ul className="social">
                                <li><a href="#"><img src={Twiter} alt="Social Icons" /></a></li>
                                <li><a href="#"><img src={Instagram} alt="Social Icons" /></a></li>
                                <li><a href="#"><img src={Facebook} alt="Social Icons" /></a></li>
                            </ul>
                            <div className="languageDrop">
                                <div className="languageDrop">
                                    <img src={Globe} alt="Globe" />
                                    <span className='textEng'>English</span>
                                    <span className='textAr'>Arabic</span>
                                    <ul>
                                        <li><a href="./en">English</a></li>
                                        <li><a href="./ar">Arabic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div className="quickLinkWidget">
                            <h3>Pages</h3>
                            <ul className="quickLinks">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">DMCA</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Store</a></li>
                                <li><a href="#">Cookie Notice</a></li>
                                <li><a href="#">Anti-Slavery</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div className="quickLinkWidget">
                            <h3>Others</h3>
                            <ul className="quickLinks">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">USC2257</a></li>
                                <li><a href="#">Fan and Creator</a></li>
                                <li><a href="#">Branding</a></li>
                                <li><a href="#">Complaints Policy</a></li>
                                <li><a href="#">Standard Contract Between</a></li>
                                <li><a href="#">Acceptable Use Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                Copyright © 2023 | Designed by Lorem Ipsum.
            </div>
        </footer>
     );
}

export default Footer;