import styled from 'styled-components';

type PaperPropTypes = {
	shadow?: boolean;
};

export const Paper = styled.div<PaperPropTypes>`
	border-radius: 8px;
	background: #fff;
	width: 100%;
	overflow: hidden;
	${({ shadow }) => (shadow ? 'box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25)' : '')};
`;
