import styled from "styled-components";

type ImagePropsType = {
    source: string;
    alt: string;
    width: string,
}

export const Image = (props: ImagePropsType) => {
    return (
        <StyledImage width={props.width} src={props.source} alt={props.alt} />
    );
};

type StyledImagePropsType = {
    width: string,
}

const StyledImage = styled.img<StyledImagePropsType>`
    max-width: ${props => (props.width)};
    width: 100%;
    height: 100%;
    object-fit: cover;
`