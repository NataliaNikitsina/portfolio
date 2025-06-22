// import React from 'react';

import {StyledSection} from "../../../components/StyledSection.tsx";
import {Input} from "./Input.tsx";
import {InputButton} from "./InputButton.tsx";
import {StyledTitleH2} from "../../../components/title/allTitle.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";

export const Contact = () => {
    return (
        <StyledSection direction="column" align="center" gap="80px">
            <StyledTitleH2>Contact me</StyledTitleH2>
            <form>
                <FlexWrapper direction="column" align="center" gap="24px">
                <Input labelText="Name" inputType="text" placeholder ={"Your name"} width="400px" idInput={Math.random().toString()}/>
                <Input labelText="Email" inputType="email" placeholder ="Your email" width="400px" idInput={Math.random().toString()}/>
                <Input labelText="Message" inputType="textarea" placeholder ="Your message..." width="400px" idInput={Math.random().toString()}/>
                <InputButton inputType="submit" width="90px" align="flex-end" value="Send"/>
                </FlexWrapper>
            </form>
        </StyledSection>
    );
};



