import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const StyledHello = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 56px;
    color: #333;
    margin-right: 15px;
    

    @media screen and (max-width: 1230px) {
        font-size: 44px;
    }
    
    @media ${theme.media.large} {
        font-size: 46px;
    }

    @media ${theme.media.tablet} {
        align-self: start;
    }
    
    @media ${theme.media.mobile} {
        font-size: 38px;
    }
`