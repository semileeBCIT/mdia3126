import React from 'react';
import styled from 'styled-components';

const IconBox = styled.div`
    display:flex;
`;

const LeftIcons = styled.div`
    display:flex;
    left:10px;
    position:absolute;
`;

const RightIcons = styled.div`
    display:flex;
    right:10px;
    position:absolute;
`;

const IconImg = styled.div`
    margin-right:20px;
    display:flex;
    align-items:center;
    img {
        width:20px;
        height:20px;
        margin-right:5px;
    }
`;

const Icons = ({}) => {
    return <IconBox>
        <LeftIcons>
            <IconImg><img src='/logo.png' />Logo</IconImg> 
            <IconImg><img src='/menu1.png' />Menu1</IconImg> 
            <IconImg><img src='/menu2.png' />Menu2</IconImg>
           
        </LeftIcons>
        <RightIcons>
            <IconImg><img src='/search.png' /></IconImg>
            <IconImg><img src='/bell.png' /></IconImg> 
            <IconImg><img src='/avatar.png' /></IconImg>
        </RightIcons>   
    </IconBox> 
}


export default Icons;