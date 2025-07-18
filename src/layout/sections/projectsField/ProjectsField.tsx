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
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

const tabArray: Array<{ title: string, status: TabStatusType }> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "Spa",
        status: "spa",
    },
    {
        title: "Landing Page",
        status: "landing page",
    },
]

const projectsArray = [
    {
        projectTitle: 'My HTML',
        projectText: textArray[1],
        imageWay: imageProject1,
        type: "spa",
    },
    {
        projectTitle: 'My CSS',
        projectText: textArray[2],
        imageWay: imageProject2,
        type: "react",
    },
    {
        projectTitle: 'My JS',
        projectText: textArray[3],
        imageWay: imageProject3,
        type: "landing page",
    },
]

export const ProjectsField = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredProjects = projectsArray;

    if (currentFilterStatus === "landing page") {
        filteredProjects = filteredProjects.filter(project => project.type === "landing page");
    }
    if (currentFilterStatus === "react") {
        filteredProjects = filteredProjects.filter(project => project.type === "react");
    }
    if (currentFilterStatus === "spa") {
        filteredProjects = filteredProjects.filter(project => project.type === "spa");
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <StyledProjectsField id={"projects"}>
            <Container>
                <StyledTitleH2>Projects</StyledTitleH2>
                <TabMenu tabItems={tabArray}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper direction="column" align="center" gap="80px">
                    <AnimatePresence>
                        {filteredProjects.map((item, i) => (
                            <motion.div
                                layout
                                initial={{opacity: 0 }}
                                animate={{opacity: 1 }}
                                exit={{opacity: 0 }}
                                key={i}
                            >
                                <Project key={i} title={item.projectTitle} text={item.projectText} way={item.imageWay}/>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </StyledProjectsField>
);
};

const StyledProjectsField = styled.section`
    position: relative;
    z-index: 999;

    margin-bottom: 144px;
    padding: 0 15px;

    @media ${theme.media.tablet} {
        margin-bottom: 80px;
    }
`