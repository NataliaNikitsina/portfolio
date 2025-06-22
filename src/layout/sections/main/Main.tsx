// import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../../assets/images/main-photo.webp"
import {StyledText} from "../../../components/text/StyledText.tsx";
import {textArray} from "../../../components/text/textArray.tsx";
import {StyledSection} from "../../../components/StyledSection.tsx";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.tsx";
import {StyledTitleH1} from "../../../components/title/allTitle.tsx";

export const Main = () => {
    return (
        <StyledSection justify="space-between">
            <FlexWrapper direction="column" gap="12px" maxWidth="508px">
                <StyledTitleH1>Software Developer</StyledTitleH1>
                <FlexWrapper direction="column" gap="32px">
                    <StyledSpan>Hello,  my name is Natalia Nikitsina</StyledSpan>
                    <StyledText>{textArray[0]}</StyledText>
                    <FlexWrapper gap="12px">
                        <StyledLinkBtn href='/' radius='8px' backgroundColor='#fdc435'>Projects</StyledLinkBtn>
                        <StyledLinkBtn href='/' border='2px solid #25282b;' radius='8px'>LinkedIn</StyledLinkBtn>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            <Photo src={photo} alt="photo"/>
        </StyledSection>
    );
};


const Photo = styled.img`
    width: 450px;
    height: 500px;
    object-fit: cover;
`

const StyledSpan = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 1.2;
    color: #333;
`