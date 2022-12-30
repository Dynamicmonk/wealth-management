import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   } 

   body{
    font-family: 'Karla', sans-serif;
    font-size: ${({ theme }) => theme.mobilefontSize.body};
   }

   h1, h2, h3 {
    font-family: 'Jost', sans-serif;
   }

   h1{
    font-size: ${({ theme }) => theme.mobilefontSize.h1};
    font-weight: 700;
   }

   h2{
     font-size: ${({ theme }) => theme.mobilefontSize.h2};
     font-weight: 500;
   }

    h3{
     font-size: ${({ theme }) => theme.mobilefontSize.h3};
     font-weight: 500;
   }

    body, input, label, p, strong, button, table, td, tr, li, b {
     font-family: 'Karla', sans-serif;
     font-weight: 400;
   }

   strong, b {
    font-weight: 500;
   }

   body, input, strong, p, table, td, tr, li, b {
    font-size: ${({ theme }) => theme.mobilefontSize.body};
   }

   label, button {
    font-size: ${({ theme }) => theme.mobilefontSize.labels};
   }

   @media (min-width: ${({ theme }) => theme.breakpoint.tabletMinWidth}) {
    body{
        font-size: ${({ theme }) => theme.deskTopfontSize.body}
    }
    
    h1{
        font-size: ${({ theme }) => theme.deskTopfontSize.h1};
    }

    h2{
        font-size: ${({ theme }) => theme.deskTopfontSize.h2};
    }

    h3{
        font-size: ${({ theme }) => theme.deskTopfontSize.h3};
    }

    body, input, strong, p, table, td, tr, li, b {
        font-size: ${({ theme }) => theme.deskTopfontSize.body};
   }

   label, button {
        font-size: ${({ theme }) => theme.deskTopfontSize.labels};
    }

   }
`;
