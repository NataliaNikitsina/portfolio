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
import {TabMenu, TabStatusType} from "./TabMenu.tsx";
import {useState} from "react";

const tabArray: Array <{title:string, status: TabStatusType}> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing Page",
        status: "landing page",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "Spa",
        status: "spa",
    },
]

const projectsArray = [
    {
        projectTitle:'My HTML',
        projectText: textArray[1],
        imageWay: imageProject1,
        type: "spa",
    },
    {
        projectTitle:'My CSS',
        projectText: textArray[2],
        imageWay: imageProject2,
        type: "react",
    },
    {
        projectTitle:'My JS',
        projectText: textArray[3],
        imageWay: imageProject3,
        type: "landing page",
    },
]

export const ProjectsField = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredProjects = projectsArray;

    if(currentFilterStatus === "landing page"){
        filteredProjects = filteredProjects.filter(project => project.type === "landing page");
    }
    if(currentFilterStatus === "react"){
        filteredProjects = filteredProjects.filter(project => project.type === "react");
    }
    if(currentFilterStatus === "spa"){
        filteredProjects = filteredProjects.filter(project => project.type === "spa");
    }

    function changeFilterStatus(value:TabStatusType){
        setCurrentFilterStatus (value)
    }

    return (
        <StyledProjectsField>
            <Container>
                <StyledTitleH2>Projects</StyledTitleH2>
                <TabMenu tabItems={tabArray}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper direction="column" align="center" gap="80px">
                    {filteredProjects.map( (item, i) => (<Project key={i} title={item.projectTitle} text={item.projectText} way={item.imageWay}/>))}
                </FlexWrapper>
            </Container>
        </StyledProjectsField>
    );
};
 const StyledProjectsField = styled.section`
     margin-bottom: 144px;
     padding: 0 15px;

     @media ${theme.media.tablet} {
         margin-bottom: 80px;
     }
 `