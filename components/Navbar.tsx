'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);

  const pageArray = [
    { name: 'Our Story', path: '/' },
    { name: 'How it Works', path: '/how-to-ride' },
    { name: 'Request a Ride', path: '/request-ride' },
    { name: 'Press', path: '/press' },
    { name: 'FAQ', path: '/faq' },
  ];

  const pageList = pageArray.map((link) => (
    <li key={link.name}>
      {link.path === '/request-ride' ? (
        <Link href={link.path}>
          {link.name}
          <img
            src={'/taxi_icon_white.svg'}
            alt="Taxi"
            className="ride-icon"
          ></img>
        </Link>
      ) : (
        <Link href={link.path}>{link.name}</Link>
      )}
    </li>
  ));

  const toggleHamburger = (ham: Element) => {
    ham.classList.toggle('change-state');
    setHamOpen(!hamOpen);
  };

  return (
    <div className="navbar frontend">
      <div className="header">
        <div className="branding">
          <img className="logo" src={'/logo.svg'} alt="CMC" />
          <Link href={'/'} className="text">
            Cafe Maddy Cab
          </Link>
        </div>

        <div
          className="nav-ham"
          onClick={(e) => {
            toggleHamburger(e.currentTarget);
          }}
        >
          <div className="ham1"></div>
          <div className="ham2"></div>
          <div className="ham3"></div>
        </div>
      </div>
      <div className={hamOpen ? 'nav active' : 'nav'}>
        <ul>{pageList}</ul>
      </div>
    </div>
  );
};

export default Navbar;
