import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }


  body.fontLoaded {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-image: linear-gradient( 360deg, #FAB2FF 10%, #00004d 80%);
    position: absolute;
    background-size: 100% 100%;
    z-index: 0;
    min-height: 100%;
    min-width: 100%;
  }

  p {
    line-height: 1.5em;
    color: white;
  }

  

   #particles canvas {
    position: absolute; 
    left:0;
    top:0;
    width:10%;
    height:10%;
    z-index: -1;
  } 

  #outlined-full-width {
    position: relative;
    background-color: none;
    z-index: 1;
    // text-align: center;
    padding: 1.3em;
    border-color: white;
  }

  #globe {
    position: absolute;
    z-index: 2;
  }

  #id {
    padding-top: 12em;
  }

  #outlined-full-width {
    color: white;
    background-color: 'rgba(1, 4, 76, 0)';
    
   
    
  }

  .hJDqki {
    margin: 3em auto;
    text-align: center;
    width: 100%;
}
 
`;

export default GlobalStyle;

