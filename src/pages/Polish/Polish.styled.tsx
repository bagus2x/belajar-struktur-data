import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/styled/Button';
import { Paper } from '../../components/styled/Paper';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #312f45;
	min-height: 100vh;
	padding: 20px 4px;
`;

export const ContentWrapper = styled(Paper)`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 12px;
	align-items: center;
	& > *:not(:last-child) {
		margin-bottom: 20px;
	}
`;

export const SelectWrapper = styled.div`
	display: flex;
	width: 100%;
	& > :first-child {
		margin-right: 12px;
	}
	& > :last-child {
		margin-left: 12px;
	}
`;

export const BtnSwitch = styled.button`
	user-select: none;
	background: none;
	cursor: pointer;
	display: grid;
	place-items: center;
	width: 60px;
	&:active {
		transform: scale(120%);
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	& > :first-child {
		margin-right: 12px;
	}
	& > :last-child {
		margin-left: 12px;
	}
	@media screen and (max-width: 640px) {
		flex-direction: column;
		justify-content: center;
		& > * {
			margin-right: 0;
			margin-left: 0 !important;
			margin-bottom: 8px;
		}
	}
`;

export const ResultBox = styled.div`
	background: #eee6f1;
	padding: 8px;
	border-radius: 8px;
	font-size: 13.5px;
	width: 100%;
	&:hover {
		background: #e0d7e4;
	}
`;

export const CoverterButton = styled(Button)`
	width: 200px;
	@media screen and (max-width: 640px) {
		width: 100%;
	}
`;

export const ButtonHome = styled(Link)`
	border-radius: 50%;
	padding: 10px;
	z-index: 9999;
	position: fixed;
	left: 20px;
	bottom: 20px;
	width: 40px;
	height: 40px;
	background: #fff;
	color: #312f45;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
	&:hover {
		background: #ccc;
	}
`;
