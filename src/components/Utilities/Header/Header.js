import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import logo from '../../../assets/img/logo/logo.png';
import toggolIcon from '../../../assets/img/bg/toggle-menu.png';
import Offcanvas from '../Offcanvas/Offcanvas';



const Header = () => {

    const [openCanvas, setOpenCanves] = useState(false);

    const [iconToggle, setIconToggle] = useState(false);

    const heandelOpen = () => {
        setOpenCanves(!openCanvas);
    }


    return (
        <React.Fragment>
            <header className='header-area header-three p-relative'>
                <div id="header-sticky" className="menu-area">
                    <div className="container-fluid pl-50 pr-50">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-1 col-lg-1 col-6">
                                    <div className="logo">
                                        <Logo logo={logo} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block offset-lg-2">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-sub">
                                                    <Link to={'/'}>{'Home'}</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to={'/'}>{'Home Page 01'}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/home-two'}>{'Home Page 02'}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/home-three'}>
                                                                {'Home Page 03'}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><Link to={'/about'}>{'About Us'}</Link>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to={'#'}>{'Pages'}</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to={'/gallery'}>{'Gallery'}</Link>
                                                        </li>
                                                        <li><Link to={'/team'}>{'Team'}</Link></li>
                                                        <li><Link to={'/faq'}>{'Faq'}</Link></li>
                                                        <li><Link to={'/game'}>{'Our Game'}</Link></li>
                                                        <li><Link to={'/matchese'}>
                                                            {'Matchese'}
                                                        </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/matchese-details'}>
                                                                {'Matchese Details'}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/live-streaming'}>
                                                                {'Live Streaming'}
                                                            </Link>
                                                        </li>
                                                        <li><Link to={'/single-post'}>{'Blog Details'}</Link></li>
                                                        <li><Link to={'/404'}>{'404 Page'}</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to={'/blog'}>{'Blog'}</Link></li>
                                                <li><Link to={'/contact'}>{'Contact'}</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 text-left d-none d-lg-block mt-30 mb-30">
                                    <div className="cart-top">
                                        <ul>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <a onClick={heandelOpen} className="menu-tigger">
                                                    <i className="fas fa-search"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-1 col-lg-1 text-right d-none d-lg-block mt-30 mb-30">
                                    <a onClick={heandelOpen} className="menu-tigger">
                                        <img src={toggolIcon} alt="Toggle Icon" />
                                    </a>
                                </div>
                                <div className="col-6 d-block d-lg-none">

                                    <div className="mobile-toggler text-right">
                                        <a onClick={() => setIconToggle(!iconToggle)}>
                                            <i className={`${iconToggle ? 'fas fa-times' : 'fa fa-bars'}`}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MobileMenu toggleMenu={iconToggle} onClose={setIconToggle} />
                    </div>
                </div>
            </header>
            <Offcanvas onOpne={openCanvas} onClose={setOpenCanves} />

        </React.Fragment>
    )
}

export default Header;
