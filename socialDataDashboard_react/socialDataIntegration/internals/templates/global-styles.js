import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: white;
    padding: 3em;
    text-align: center;

  }

  body.fontLoaded {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  // #particles canvas {
  //   position: relative;
  //   left:0;
  //   top:0;
  //   width:100%;
  //   height:80%;
  //   z-index: 0;
  // }

  // #globe {
  //   position: absolute;
  //   z-index: 2;
  // }


  // p,
  // label {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  //   line-height: 1.5em;
  //   color: rgba(0, 0, 0, 0.54);
  // }

  // #outlined-full-width {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  //   text-align: center;
  //   z-index: 1;
  
  // }

`;

export default GlobalStyle;
