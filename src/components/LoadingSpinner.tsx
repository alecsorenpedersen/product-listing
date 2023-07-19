import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Spinner = styled(motion.div)`
	width: 80px;
	height: 80px;
	border: 8px solid rgba(0, 0, 0, 0.1);
	border-left-color: #cf0010; // Change to match your app's color scheme
	border-radius: 50%;
`;

const CenteredSpinner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 50px); // Adjust as needed
`;

const LoadingSpinner: React.FC = () => (
	<CenteredSpinner>
		<Spinner
			animate={{ rotate: 360 }}
			transition={{ duration: 1, repeat: Infinity }}
		/>
	</CenteredSpinner>
);

export default LoadingSpinner;
