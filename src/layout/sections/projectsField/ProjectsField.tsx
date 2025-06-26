// import React from 'react';

import {textArray} from "../../../components/text/textArray.ts";
import imageProject1 from "../../../assets/images/project-1.webp";
import imageProject2 from "../../../assets/images/project-2.webp";
import imageProject3 from "../../../assets/images/project-3.webp";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {StyledTitleH2} from "../../../components/title/allTitle.tsx";
import {StyledSection} from "../../../components/StyledSection.tsx";
import {Project} from "./Project.tsx";

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
        <StyledSection direction="column" align="center">
            <StyledTitleH2>Projects</StyledTitleH2>
            <FlexWrapper direction="column" align="center" gap="80px">
                {projectsArray.map( item => (<Project title={item.projectTitle} text={item.projectText} way={item.imageWay}/>))}
            </FlexWrapper>
        </StyledSection>
    );
};
