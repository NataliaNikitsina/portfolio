import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {StyledTitleH2} from "../../../components/StyledTitleH2.ts";
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

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
        <StyledSKills>
            <Container>
                <StyledTitleH2>Skills</StyledTitleH2>
                <FlexWrapper wrap="wrap" justify="space-evenly">
                    {skillArray.map((skill, i) => (<Icon key={i} iconId={skill}/>) ) }
                </FlexWrapper>
            </Container>
        </StyledSKills>
    );
};

const StyledSKills = styled.section`
    margin-bottom: 140px;

    @media ${theme.media.tablet} {
        margin-bottom: 60px;
    }
    
    ${FlexWrapper} {
        row-gap: 84px;
        column-gap: 97px;

        @media ${theme.media.tablet} {
            row-gap: 58px;
            column-gap: 73px;
        }
    }
`
