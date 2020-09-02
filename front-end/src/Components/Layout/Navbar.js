/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as SScroll } from 'react-scroll';
const Navbar = ({
    NavbarProps: {
        Static,
        LogoBrand,
        LogoBrand2,
        NavItems,
        PageLink,
        isSearchable,
        socialAccounts,
        socialLinks,
    },
}) => {
    return (
        <>
            <nav
                className={`navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar`}
                id='#portfolioNav'
            >
                <div className='container smooth-scroll'>
                    <Link
                        onClick={() => {
                            SScroll.scrollToTop();
                        }}
                        to={PageLink}
                    >
                        {' '}
                        <img
                            src={LogoBrand2}
                            style={{ width: '60px', height: '60px' }}
                            className='mine-logo'
                            alt=''
                            id="logoNav"
                        />
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent-7'
                        aria-controls='navbarSupportedContent-7'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <i class='fas fa-bars'></i>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent-7'
                    >
                        <ul className='ml-5 mt-3 navbar-nav mr-auto smooth-scroll'>
                            {Static
                                ? NavItems.map((element) => {
                                    return (
                                        <li key={element.id} className='nav-item'>
                                            <Link
                                                className='nav-link font-italic font-weight-bold'
                                                to={element.href}
                                            >
                                                {element.name}
                                            </Link>
                                        </li>
                                    );
                                })
                                : null}
                        </ul>
                        {isSearchable === true ? (
                            <form className='form-inline'>
                                <div className='md-form my-0'>
                                    <input
                                        className='form-control mr-sm-2'
                                        type='text'
                                        placeholder='Search'
                                        aria-label='Search'
                                    />
                                </div>
                            </form>
                        ) : null}
                        {socialLinks === true ? (
                            <ul className='mt-3 navbar-nav nav-flex-icons'>
                                {socialAccounts.map((el) => {
                                    return (
                                        <li key={el.id} className='nav-item'>
                                            <a
                                                target='_blank'
                                                href={el.href}
                                                className='nav-link'
                                            >
                                                <i className={`fa-2x ${el.website}`}></i>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : null}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;