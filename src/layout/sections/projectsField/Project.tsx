import styled from "styled-components";
import {Image} from "../../../components/image/Image.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.tsx";


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
                <StyledLinkBtn border="1px solid #25282b" radius="24px">View Project</StyledLinkBtn>
            </FlexWrapper>
            <ImageWrapper>
                <Image source={props.way} alt="Project Name"/>
                <StyledLinkBtn href='/' radius='8px' backgroundColor='#fdc435'>Open</StyledLinkBtn>
            </ImageWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    border-radius: 24px;
    max-width: 992px;
    min-height: 524px;
    overflow: hidden;
    display: flex;
    
    &:nth-of-type(even) {
        flex-direction: row-reverse;
    }
    
    ${FlexWrapper} {
        margin: 145px 38px 145px 50px;
    }
    
`

const ImageWrapper = styled.div`
    max-width: 495px;
    width: 100%;
    position: relative;

    ${StyledLinkBtn} {
        opacity: 0;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        min-width: 150px;
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

`
