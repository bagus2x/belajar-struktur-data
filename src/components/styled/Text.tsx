import styled from 'styled-components';

type TextProptypes = {
	weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

export const H1 = styled.h1<TextProptypes>`
	font-weight: ${({ weight }) => (weight ? weight : 500)};
	color: #181818;
	@media screen and (max-width: 640px) {
		font-size: 1.75rem;
	}
`;

export const H2 = styled.h2<TextProptypes>`
	font-weight: ${({ weight }) => (weight ? weight : 500)};
	color: #181818;
`;

export const H3 = styled.h3<TextProptypes>`
	font-weight: ${({ weight }) => (weight ? weight : 500)};
	color: #181818;
`;

export const H4 = styled.h4<TextProptypes>`
	font-weight: ${({ weight }) => (weight ? weight : 500)};
	color: #181818;
`;

export const H5 = styled.h5<TextProptypes>`
	font-weight: ${({ weight }) => (weight ? weight : 500)};
	color: #181818;
`;

export const H6 = styled.h6<TextProptypes>`
	font-weight: ${({ weight }) => (weight ? weight : 500)};
	color: #181818;
`;
