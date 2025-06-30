import styled from "styled-components";

type ImagePropsType = {
    source: string;
    alt: string;
}

export const Image = (props: ImagePropsType) => {
    return (
        <StyledImage src={props.source} alt={props.alt} />
    );
};


const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`