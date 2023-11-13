import React from 'react';

import Checkbox from '../../assets/img/check-circle.svg';
import Search from '../../assets/img/search.svg';
import HomeBanar from '../../assets/img/hero-banar.png';
import HomeArtRight from '../../assets/img/hero-art-right.png';
import HomeArtLeft from '../../assets/img/heor-art-left.png';

function HomePage() {
    return ( 
        <main>
            <div className="heorArea">
                <img src={HomeArtRight} alt="homeArtRight" className="homeArtRight" />
                <img src={HomeArtLeft} alt="homeArtLeft" className="homeArtLeft" />
                <div className="container">
                    <div className="homeContainer">
                        <div className="homeConten">
                            <h1>
                                <b className='color-blue'>Helping Students</b> Through Their <b>Hardest Times</b>
                            </h1>
                            <p className="checkText">
                                <img src={Checkbox} alt="Checkbox" /> 
                                <span>All creators are verified university students</span>
                            </p>
                            <div className="homeSearch">
                                <form action="#">
                                    <div className="searchCol">
                                        <img src={Search} alt="Search" className='searchIcon' />
                                        <input type="search" placeholder='Search by University' name='searchUnivercity' id='searchUnivercity' />
                                        {/* <button type='button'>Search</button> */}
                                    </div>
                                </form>
                                <div className="searchBtn">
                                    <a href="#">Sign up as a fan</a>
                                    <a href="#">Sign up as a content creator</a>
                                </div>
                            </div>
                        </div>
                        <div className="homeImg">
                            <img src={HomeBanar} alt="HomeBanar" />
                        </div>
                    </div>
            </div>
            </div>
        </main>
     );
}

export default HomePage;