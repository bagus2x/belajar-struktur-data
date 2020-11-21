import styled from 'styled-components';
import { Paper } from '../styled/Paper';

export const MenuContainer = styled.div<{ fullWidth?: boolean }>`
	position: relative;
	${({ fullWidth }) => (fullWidth ? 'width: 100%' : '')};
	& * {
		user-select: none;
	}
`;
export const MenuTitle = styled(Paper)`
	background: #eee6f1;
	text-align: center;
	font-weight: 500;
	padding: 8px;
	cursor: pointer;
	position: relative;
	&:hover {
		background: #e0d7e4;
	}
`;

export const ItemMenuWrapper = styled(Paper)<{ fullWidth?: boolean }>`
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 999;
	width: auto;
	${({ fullWidth }) => (fullWidth ? 'min-width: 100%' : '')};
`;

export const ItemMenu = styled.div`
	padding: 8px;
	&:hover {
		cursor: pointer;
		background: #e6e6e6;
	}
`;
