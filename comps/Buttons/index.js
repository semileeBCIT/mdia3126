import React from 'react';
import styled, {css} from 'styled-components';


const ButtonBox = styled.div`
    background-color:${props=>props.bccolor ? props.bccolor : "#DDD"};
    width: 385px;
    border-radius: 3px;
`;

const ButtonComp = styled.div`
    font-size:18px;
    color: #FFF;
    padding:10px 0;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`;

const GoogleImg = styled.div`
    left:2px;
    position:absolute;
    img {
        width:41px;
        height:41px;
        margin-top:10px;
    }

    ${props=>props.google === false && css`
    display:none;
    `}
`;

const Buttons = ({color,bccolor, text, google}) => {
    return <ButtonBox bccolor={bccolor} >
        <ButtonComp color={color}>
        <GoogleImg google={google}><img src='/google.png'/></GoogleImg>
           {text}
        </ButtonComp>
    </ButtonBox> 
}

Buttons.defaultProps = {
   bccolor:'#DDD'
}

export default Buttons;