import {createGlobalStyle} from 'styled-components'
import {Colors} from './colors'


export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#root {
    display: flex;
    align-items: center;
    justify-content: center;
height: 100vh;
   width: 100vw;
   background-color: ${Colors.PrimaryDark};
}
body {
   border-radius: 4rem;
}
`