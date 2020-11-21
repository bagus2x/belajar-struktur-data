import styled from 'styled-components';

type InputPropTypes = {
	fullWidth?: boolean;
};

export const Input = styled.input<InputPropTypes>`
	background: #eee6f1;
	padding: 8px;
	border-radius: 8px;
	${({ fullWidth }) => (fullWidth ? 'width: 100%' : '')};
	&:hover {
		background: #e0d7e4;
	}
	&:focus {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	}
	&:focus:hover {
		background: #eee6f1;
	}
`;
