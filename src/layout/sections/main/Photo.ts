import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import photoBcg from "../../../assets/images/main-bg.svg"

export const Photo = styled.img`
    max-width: 777px;
    height: 630px;
    width: 100%;
    background-color: ${theme.colors.accent};
    object-fit: cover;

    position: absolute;
    top: 0;
    right: -105px;
    
    mask-image: url("${photoBcg}");
    mask-repeat: no-repeat;
    mask-position: left bottom;

    @media screen and (max-width: 1230px) {
       max-width: 550px;
        right: -80px;
    }

    @media ${theme.media.large} {
        max-width: 777px;
        right: 0
    }

    @media ${theme.media.mobile} {
        max-width: 550px;
        height: 395px;
        mask-size: 486px 550px;
    }
`