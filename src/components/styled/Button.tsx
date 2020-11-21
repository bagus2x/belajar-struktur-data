import styled from 'styled-components';

type ButtonPropTypes = {
	fullWidth?: boolean;
	size?: 'sm' | 'md' | 'lg';
};

export const Button = styled.button<ButtonPropTypes>`
	border-radius: 8px;
	background: #312f45;
	transition: background 0.2s ease-in-out;
	color: #fff;
	${({ fullWidth }) => (fullWidth ? 'width: 100%' : '')};
	${({ size }) => {
		switch (size) {
			case 'lg':
				return 'padding: 16px 20px';
			case 'md':
				return 'padding 12px 16px';
			default:
				return 'padding 8px 12px';
		}
	}};
	&:hover {
		background: #1c1a2b;
		cursor: pointer;
	}
	&:active {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	}
`;
