// import React from 'react';

import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {StyledTitleH2} from "../../../components/title/allTitle.tsx";
import {StyledSection} from "../../../components/StyledSection.tsx";

export const Skills = () => {
    return (
        <StyledSection direction="column" align="center">
            <StyledTitleH2>Skills</StyledTitleH2>
            <FlexWrapper wrap="wrap" gap="95px" maxWidth="1200px">
                <Icon iconId="webStormIcon" viewBox="0 0 70 70" />
                <Icon iconId="htmlIcon" />
                <Icon iconId="cssIcon" />
                <Icon iconId="jsIcon" />
                <Icon iconId="tsIcon" />
                <Icon iconId="reactIcon" />
                <Icon iconId="githubIcon" />
                <Icon iconId="gitIcon" />
                <Icon iconId="greensockIcon" />
                <Icon iconId="bootstrapIcon" />
                <Icon iconId="sassIcon" />
                <Icon iconId="vectorIcon" />
                <Icon iconId="tailwindIcon" />
                <Icon iconId="styledComponentsIcon" />
                <Icon iconId="figmaIcon" viewBox="0 0 200 300" />
            </FlexWrapper>
        </StyledSection>
    );
};
