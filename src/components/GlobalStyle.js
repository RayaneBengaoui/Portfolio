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

    @media (max-width : 1750px){
        font-size : 50%
    }
    @media (max-width : 650px){
        font-size : 40%
    }
    @media (max-width : 374px){
        font-size : 35%
    }
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

h5{
    font-size : 5rem;
    color : white;
}

p{
    font-size : 1rem;
    color:white;
}



button{
    font-weight:bold;
    font-size:2rem;
    font-family: inherit;
    padding : 1.7rem 2rem;
    border-radius : 200px;
    border : none;
    cursor : pointer;
    transition: all 0.5s ease;
    outline : none;
} 


`;

export default GlobalStyle;
