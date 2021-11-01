import { createGlobalStyle } from 'styled-components';

import basiersquaremono from './basiersquaremono.woff';
import basiersquaremono2 from './basiersquaremono.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'basier_square_monoregular';
        src: local('basier_square_monoregular'), local('basiersquaremono'),
        url(${basiersquaremono2}) format('woff2'),
        url(${basiersquaremono}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;