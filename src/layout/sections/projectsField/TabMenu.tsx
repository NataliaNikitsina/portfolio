import styled, {css} from "styled-components";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.ts";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";

export type TabStatusType = "all" | "landing page" | "react" | "spa";

type TabMenuPropsType = {
    tabItems: Array <{title:string, status: TabStatusType}>,
    changeFilterStatus: (value: TabStatusType) => void,
    currentFilterStatus: string,
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <FlexWrapper justify={"space-evenly"} wrap={"wrap"} gap={"15px"}>
                {props.tabItems.map((item, i) => {
                    return (<StyledTabItem active={props.currentFilterStatus === item.status} key={i}>
                        <StyledLinkBtn as="button" onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</StyledLinkBtn>
                    </StyledTabItem>)
                })}
            </FlexWrapper>
        </StyledTabMenu>
    )
}

const StyledTabMenu = styled.ul`
    max-width: 800px;
    width: 100%;
    margin: 0 auto 80px;
`

const StyledTabItem = styled.li<{active?: boolean}>`
    ${StyledLinkBtn} {
        max-width: 200px;
        width: 100%;
        min-height: 43px;
        border-radius: 8px;
        border: 2px solid ${theme.colors.fontMain};
        background-color: transparent;

        ${props => props.active && css<{active?: boolean}>`
        background-color: ${theme.colors.accent};
    `}
    }
`