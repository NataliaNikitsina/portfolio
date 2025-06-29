import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";

type SocialLinkPropsType = {
    iconId: string,
}

export const SocialLink = (props: SocialLinkPropsType) => {
    return (
       <StyledListItem>
           <a href="/">
               <Icon iconId={props.iconId} height={"49px"} width={"48px"}/>
           </a>
       </StyledListItem>
    );
};

const StyledListItem = styled.li`
    
`