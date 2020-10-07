import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
    display:flex;
`;

const LeftImage = styled.div`

`;

const HeroImg = styled.div`
    img {
        height:auto;
        width:380px;
    }
`;

const Images = () => {
    return <ImageBox>
        <LeftImage>
            <HeroImg><img src='/hero.png' /></HeroImg>
            <WelcomeImg><img src='/bubble.png' /></WelcomeImg> 
        </LeftImage>
    </ImageBox> 
}


export default Images;