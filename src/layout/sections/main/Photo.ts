import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import photoBcg from "../../../assets/images/main-bg.svg"

export const Photo = styled.img`
    max-width: 777px;
    width: 100%;
    background-color: ${theme.colors.accent};
    object-fit: cover;

    position: absolute;
    top: 0;
    right: -105px;
    
    mask-image: url("${photoBcg}");
    mask-repeat: no-repeat;
    mask-position: left bottom;
    mask-size: cover;

    @media screen and (max-width: 1440px) {
        max-width: 720px;
    }

    @media screen and (max-width: 1230px) {
        max-width: 605px;
        right: -50px;
    }
    
    @media ${theme.media.large} {
        max-width: 800px;
        right: 0;
        top: -40px;
    }

    @media ${theme.media.tablet} {
        max-width: 700px;
        top: -20px;
        right: 0;
    }
    
    @media screen and (max-width: 530px) {
        //mask-size: 486px 550px;
        min-height: 395px;
        top: 0;
    }
`