import styled from "styled-components";
import {theme} from "../styles/Theme.ts";


export const StyledTitleH2 = styled.h2`
    margin-bottom: 80px;
    
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 4px;
        width: 100px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        bottom: -4px;
        transform: translateX(-50%);
    }
`