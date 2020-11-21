import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H2, H6 } from '../../components/styled/Text';

function Home() {
	return (
		<HomeContainer>
			<HomeCardWrapper>
				<HomeCard to="/polish" color="#383557">
					<H2>Polish</H2>
				</HomeCard>
				<HomeCard to="/#" color="#1b74bd">
					<H2>BST</H2>
				</HomeCard>
				<HomeCard to="/#" color="#bd1b8c">
					<H2>Heap</H2>
				</HomeCard>
			</HomeCardWrapper>
			<H6>github.com/bagus2x</H6>
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	background: #ebebeb;
    position: relative;
    & > h6{
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: 0;
    };
`;
const HomeCardWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
	grid-auto-rows: 250px;
	padding: 40px;
	gap: 20px;
	@media screen and (max-width: 640px) {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;

type HomeCardPropTypes = {
	color?: '#383557' | '#461bbd' | '#bd491b' | '#7fbd1b' | '#bd1b8c' | '#1b74bd';
};

const HomeCard = styled(Link)<HomeCardPropTypes>`
	background: ${({ color }) => (color ? color : '#9c9c9c')};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	box-shadow: inset 0 0 0 99999px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.2s ease-in-out;
	& > * {
		color: #fff;
	}
	&:hover {
		box-shadow: none;
	}
	&:active {
		transform: scale(101%);
	}
`;

export default Home;
