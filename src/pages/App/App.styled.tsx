import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Poppins', sans-serif;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    button, input, textarea {
        border: none;
    }
`;
