import styled from "styled-components";
import {StyledTitleH3} from "../../../components/title/allTitle.tsx";
import {Image} from "../../../components/image/Image.tsx";
import {StyledText} from "../../../components/text/StyledText.tsx";
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
            <FlexWrapper className="project-content" direction="column" justify={"center"} gap={"24px"}>
                <StyledTitleH3>{props.title}</StyledTitleH3>
                <StyledText>{props.text}</StyledText>
                <StyledLinkBtn border="1px solid #25282b" radius="24px">View Project</StyledLinkBtn>
            </FlexWrapper>
            <Image source={props.way} alt="Project Name" width="495px"/>
        </StyledProject>
    );
};


const StyledProject = styled.div`
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    border-radius: 24px;
    max-width: 992px;
    min-height: 524px;
    display: flex;
    
    &:nth-of-type(even) {
        flex-direction: row-reverse;
    }
    
    .project-content {
        margin: 145px 38px 145px 50px;
    }
`
