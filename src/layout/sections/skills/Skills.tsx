import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {StyledTitleH2} from "../../../components/StyledTitleH2.ts";
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import { Fade } from "react-awesome-reveal";

const skillArray = [
    "webStormIcon",
    "htmlIcon",
    "cssIcon",
    "jsIcon",
    "tsIcon",
    "reactIcon",
    "githubIcon",
    "gitIcon",
    "greensockIcon",
    "bootstrapIcon",
    "sassIcon",
    "vectorIcon",
    "tailwindIcon",
    "styledComponentsIcon",
    "figmaIcon"
]

export const Skills = () => {
    return (
        <StyledSKills id={"skills"}>
            <Container>
                <StyledTitleH2>Skills</StyledTitleH2>
                    <FlexWrapper wrap="wrap" justify="space-evenly">
                        <Fade cascade={true} damping={0.1}>
                        {skillArray.map((skill, i) => (<Icon key={i} iconId={skill}/>) ) }
                        </Fade>
                    </FlexWrapper>
            </Container>
        </StyledSKills>
    );
};

const StyledSKills = styled.section`
    margin-bottom: 144px;

    @media ${theme.media.tablet} {
        margin-bottom: 80px;
    }
    
    ${FlexWrapper} {
        row-gap: 75px;
        column-gap: 97px;

        @media ${theme.media.tablet} {
            row-gap: 55px;
            column-gap: 75px;
        }
    }
`
