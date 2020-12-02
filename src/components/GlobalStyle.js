import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
	padding:0;
	box-sizing :border-box 
}

html{
    font-family: 'Lato', sans-serif;
    font-size : 62.5%;
}

h1{
   
  font-size: 9.5rem;
  color: white;
}

h2{
    font-size : 4rem;
    color : white;
}

h3{
    font-size : 2.5rem;
    color : white;
    z-index : 100;
}



button{
    font-weight:bold;
    font-size:1.5rem;
    font-family: inherit;
    padding : 2rem 4rem;
    border-radius : 200px;
    border : none;
    cursor : pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color : #d68d64;
        color:white;
    }
} 


`;

export default GlobalStyle;
