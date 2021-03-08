//TODO: DONE! set NavbarBrand to go to home page and export Header

import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar color='dark' light>
			<NavbarBrand
				tag={Link}
				to='/'
				className='text-white'
				style={{ letterSpacing: '0.1rem' }}
			>
				@Contact App(Firebase)
			</NavbarBrand>
			<NavbarText
				className='text-white float-right'
				style={{ letterSpacing: '0.1rem' }}
			>
				Simple Contact app
			</NavbarText>
		</Navbar>
	);
};

export default Header;
