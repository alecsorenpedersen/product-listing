import styled from 'styled-components';

const FooterContainer = styled.footer`
	background: #333;
	color: #fff;
	padding: 10px;
	width: 100%;
	text-align: center;
`;

const Layout = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function Footer() {
	const year = new Date().getFullYear();

	return (
		<FooterContainer>
			<p>© {year} My React App</p>
		</FooterContainer>
	);
}

export { Footer, Layout };
