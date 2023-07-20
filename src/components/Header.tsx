// Navbar.js

import styled from 'styled-components';

const Nav = styled.nav`
	background: #fff;
	color: #fff;
	padding: 5px;
	text-align: center;
	width: 100%;
`;

const Heading = styled.h1`
	color: #333;
	font-size: 2rem;
`;

function Navbar() {
	return (
		<Nav>
			<Heading>Modern Toilets</Heading>
		</Nav>
	);
}

export default Navbar;
