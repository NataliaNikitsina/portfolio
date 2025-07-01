import {textArray} from "../../../components/textArray.ts";
import imageProject1 from "../../../assets/images/project-1.webp";
import imageProject2 from "../../../assets/images/project-2.webp";
import imageProject3 from "../../../assets/images/project-3.webp";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {StyledTitleH2} from "../../../components/StyledTitleH2.ts";
import {Project} from "./Project.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

const projectsArray = [
    {
        projectTitle:'My HTML',
        projectText: textArray[1],
        imageWay: imageProject1,
    },
    {
        projectTitle:'My CSS',
        projectText: textArray[2],
        imageWay: imageProject2,
    },
    {
        projectTitle:'My JS',
        projectText: textArray[3],
        imageWay: imageProject3,
    },
]

export const ProjectsField = () => {
    return (
        <StyledProjectsField>
            <Container>
                <StyledTitleH2>Projects</StyledTitleH2>
                <FlexWrapper direction="column" align="center" gap="80px">
                    {projectsArray.map( (item, i) => (<Project key={i} title={item.projectTitle} text={item.projectText} way={item.imageWay}/>))}
                </FlexWrapper>
            </Container>
        </StyledProjectsField>
    );
};
 const StyledProjectsField = styled.section`
     margin-bottom: 144px;

     @media ${theme.media.tablet} {
         margin-bottom: 60px;
     }
 `