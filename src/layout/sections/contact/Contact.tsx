import {Input} from "./Input.tsx";
import {InputButton} from "./InputButton.tsx";
import {StyledTitleH2} from "../../../components/StyledTitleH2.ts";
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <StyledTitleH2>Contact me</StyledTitleH2>
                <StyledForm>
                    <Input labelText="Name" inputType="text" placeholder={"Your name"}
                           idInput={Math.random().toString()}/>
                    <Input labelText="Email" inputType="email" placeholder="Your email"
                           idInput={Math.random().toString()}/>
                    <Input labelText="Message" inputType="textarea" placeholder="Your message, optionally..."
                           idInput={Math.random().toString()}/>
                    <InputButton inputType="submit" width="90px" align="flex-end" value="Send"/>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`


