import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
	background: #fff;
	color: #fff;
	padding: 5px;
	text-align: center;
	width: 100%;
`;

const Heading = styled(motion.h1)`
	color: #333;
	font-size: 2rem;
`;

function Navbar() {
	const headingVariants = {
		hidden: { opacity: 0, scale: 0.85 },
		visible: { opacity: 1, scale: 1 },
	};

	return (
		<Nav>
			<Heading
				variants={headingVariants}
				initial='hidden'
				animate='visible'
				transition={{ duration: 0.5 }}>
				Victorian Modern Toilets 🚽
			</Heading>
		</Nav>
	);
}

export default Navbar;
