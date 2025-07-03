import {Input} from "./Input.tsx";
import {StyledTitleH2} from "../../../components/StyledTitleH2.ts";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Contact = () => {
    return (
        <StyledContact>
            <StyledTitleH2>Contact me</StyledTitleH2>
            <StyledForm>
                <Input labelText="Name" inputType="text" placeholder="Your name"
                       idInput={Math.random().toString()}/>
                <Input labelText="Email" inputType="email" placeholder="Your email"
                       idInput={Math.random().toString()}/>
                <Input labelText="Message" inputType="textarea" placeholder="Your message, optionally..."
                       idInput={Math.random().toString()}/>
                <SendButton type="submit" value="Send"/>
            </StyledForm>
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

    @media ${theme.media.mobile} {
        max-width: 345px;
    }
    
    ${FlexWrapper} {
        width: 100%;
    }

    textarea {
        resize: none;
        min-height: 160px;
        padding-top: 5px;;
    }
`


const SendButton = styled.input`
    border: none;
    border-radius: 8px;
    padding: 8px 24px;
    max-width: 115px;
    width: 100%;
    background: ${theme.colors.accent};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.fontMain};
    align-self: flex-end;
`


