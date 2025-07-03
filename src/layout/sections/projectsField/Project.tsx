import styled from "styled-components";
import {Image} from "../../../components/image/Image.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.ts";
import {theme} from "../../../styles/Theme.ts";


type ProjectPropsType = {
    title: string,
    text: string,
    way: string,
}

export const Project = (props : ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction="column" justify={"center"} gap={"24px"}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <StyledLinkBtn>View Project</StyledLinkBtn>
            </FlexWrapper>
            <ImageWrapper>
                <Image source={props.way} alt="Project Name"/>
                <StyledLinkBtn href='/'>Open</StyledLinkBtn>
            </ImageWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    border-radius: 24px;
    max-width: 992px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    
    &:nth-of-type(even) {
        flex-direction: row-reverse;
    }

    @media ${theme.media.large} {
        max-width: 850px;
    }

    @media ${theme.media.mobile} {
        min-height: 1000px;
        flex-direction: column-reverse;
        align-items: center;

        &:nth-of-type(even) {
            flex-direction: column-reverse;
        }
    }
    
    ${FlexWrapper} {
        max-width: 410px;
        margin-left: 50px;
        
        @media ${theme.media.tablet} {
            max-width: 310px;
            margin-right: 20px;
            margin-left: 20px;
            
            h3 {
                font-size: 30px;
            }
        }

        @media ${theme.media.mobile} {
            margin-bottom: 130px;

            h3 {
                font-size: 40px;
            }
        }
        
        ${StyledLinkBtn} {
            border: 1px solid ${theme.colors.fontMain};
            border-radius: 24px;
        }
    }
    
`

const ImageWrapper = styled.div`
    max-width: 495px;
    width: 100%;
    
    position: relative;

    ${StyledLinkBtn} {
        border-radius: 8px;
        max-width: 150px;
        width: 100%;
        min-height: 43px;
        background-color: ${theme.colors.accent};
        
        opacity: 0;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        &::before {
            position: absolute;
            content: "";
            backdrop-filter: blur(6px);
            background: rgba(0, 0, 0, 0.12);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        ${StyledLinkBtn} {
            opacity: 1;
        }
    }

    @media ${theme.media.tablet} {
        min-width: 45%;
    }
    
    @media ${theme.media.mobile} {
        height: 500px;
    }
`
