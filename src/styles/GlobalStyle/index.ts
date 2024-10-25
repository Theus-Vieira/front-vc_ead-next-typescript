import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'); */

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
    box-shadow: 0 0 0 0;
    
    border: none;
    outline: none;
    
    scroll-behavior: smooth;
    font-family: "Inter";
    
    
    ::-webkit-scrollbar {
      display: none;
    }
    
  }

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


    color: ${(props) => props.theme.txtPrimary};
    background-color: ${(props) => props.theme.bgPrimary};
  }
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme.txtPrimary};
  }

`;
