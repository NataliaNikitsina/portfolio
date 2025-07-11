import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
}

 export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '120'} height={props.height || '120'} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}`} />
        </svg>
    );
};
