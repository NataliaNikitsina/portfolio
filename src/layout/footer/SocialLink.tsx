import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

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
    a {
        color: ${theme.colors.fontMain};
        display: inline-block;
    }
    
   a:hover {
       color: ${theme.colors.fontText};
       transform: translateY(-4px);
   }
`