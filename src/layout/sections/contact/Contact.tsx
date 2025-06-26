import {Input} from "./Input.tsx";
import {InputButton} from "./InputButton.tsx";
import {StyledTitleH2} from "../../../components/title/allTitle.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {StyledForm} from "./StyledForm.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                    <StyledTitleH2>Contact me</StyledTitleH2>
                    <StyledForm>
                        <FlexWrapper direction="column" align="center" gap="24px">
                            <Input labelText="Name" inputType="text" placeholder ={"Your name"} idInput={Math.random().toString()}/>
                            <Input labelText="Email" inputType="email" placeholder ="Your email" idInput={Math.random().toString()}/>
                            <Input labelText="Message" inputType="textarea" placeholder ="Your message, optionally..." idInput={Math.random().toString()}/>
                            <InputButton inputType="submit" width="90px" align="flex-end" value="Send"/>
                        </FlexWrapper>
                    </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    
`


