import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const THead = styled.thead`
	& > tr {
		background: #312f45 !important;
		color: #fff;
	}
`;

export const TR = styled.tr`
	color: #181818;
`;

type TDPropTypes = {
	padding?: number;
	center?: boolean;
};

export const TD = styled.td<TDPropTypes>`
	padding: ${({ padding }) => (padding ? padding + 'px' : '12px')};
	${({ center }) => (center ? 'text-align: center' : '')};
`;

export const TBody = styled.tbody`
	& > tr:nth-child(even) {
		background: #d8d7ec;
	}
`;
