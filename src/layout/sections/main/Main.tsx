import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../../assets/images/main.svg"
import photoBcg from "../../../assets/images/main-bg.svg"
import {textArray} from "../../../components/textArray.ts";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.ts";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction="column" gap="12px">
                    <h1>Software Developer</h1>
                    <FlexWrapper direction="column" gap="32px">
                        <StyledHello>Hello, my name is <span>Natalia Nikitsina</span></StyledHello>
                        <p>{textArray[0]}</p>
                        <FlexWrapper gap="20px">
                            <StyledLinkBtn href='/'>Projects</StyledLinkBtn>
                            <StyledLinkBtn href='/'>LinkedIn</StyledLinkBtn>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
                <PhotoWrapper>
                    <Photo src={photo} alt="photo"/>
                </PhotoWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    margin-bottom: 350px;

    ${Container} {
        position: relative;
    }

    ${FlexWrapper} {
        max-width: 508px;
        width: 100%;

        ${StyledLinkBtn} {
            max-width: 117px;
            width: 100%;
            min-height: 43px;
            border-radius: 8px;
            background-color: ${theme.colors.accent};

            & + ${StyledLinkBtn} {
                border: 2px solid ${theme.colors.fontMain};
                background-color: transparent;
            }
        }
    }
`
const PhotoWrapper = styled.div`
    background-image: url("${photoBcg}");
    background-repeat: no-repeat;
    background-position: 0 100%;
    max-width: 777px;
    width: 100%;
    min-height: 629px;
    align-self: flex-start;
    
    position: absolute;
    top: 0;
    right: -105px;
`

const Photo = styled.img`
    object-fit: cover;
    object-position: 3px 8px;
    max-width: 720px;
    width: 100%;
    height: 100%;
`

const StyledHello = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 56px;
    color: #333;
    text-align: left;
    
    span {
        position: relative;
        z-index: 0;
        display: inline-block;
        
        &::before {
            content: "";
            display: inline-block;
            border-radius: 8px;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`