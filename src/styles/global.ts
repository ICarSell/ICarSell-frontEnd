import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";


export const GlobalStyle = createGlobalStyle`

   *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    
    }
    button{
        cursor: pointer;
        font-family: "Inter";
        border: none;
    }

    li{
        list-style: none;
    }
    :root{

        --color-brand1:#4529E6;
        --color-brand2:#5126EA;
        --color-brand3:#B0A6F0;
        --color-brand4:#EDEAFD;
        
        --color-grey0:#0B0D0D;
        --color-grey1:#212529;
        --color-grey2:#495057;
        --color-grey3:#868E96;
        --color-grey4:#ADB5BD;
        --color-grey5:#CED4DA;
        --color-grey6:#DEE2E6;
        --color-grey7:#E9ECEF;
        --color-grey8:#F1F3F5;
        --color-grey9:#F8F9FA;
        --color-grey10:#FDFDFD;
        --color-white-fixed:#FFFFFF;

        --color-alert1:#CD2B31;
        --color-alert2:#FDD8D8;
        --color-alert3:#FFE5E5;
        --color-sucess1:#18794E;
        --color-sucess2:#CCEBD7;
        --color-sucess3:#DDF3E4;

        --color-random1:#E34D8C;
        --color-random2:#C04277;
        --color-random3:#7D2A4D;
        --color-random4:#7000FF;
        --color-random5:#6200E3;
        --color-random6:#36007D;
        --color-random7:#349974;
        --color-random8:#2A7D5F;
        --color-random9:#153D2E;
        --color-random10:#6100FF;
        --color-random11:#5700E3;
        --color-random12:#30007D;

        --radius-1:8px;
        --radius-2:4px;

        --font-family-lexend: 'Lexend', sans-serif;
        --font-family-inter: 'Inter', sans-serif;

        --text-heading1: 44px;
        --text-heading2:36px;
        --text-heading3:32px;
        --text-heading4:28px;
        --text-heading5:24px;
        --text-heading6:20px;
        --text-heading7:16px;

        --text-body1:16px;
        --text-body2:14px;

        --text-button-big:16px;
        --text-button-medium:14px;

        --text-input-placeholder:16px;
        --text-input-label:14px;
        
        --text-weight700: 700;
        --text-weight600: 600;
        --text-weight500: 500;
        --text-weight400: 400;
    }
`;
