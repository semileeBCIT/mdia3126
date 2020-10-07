import React from 'react';
import styled from 'styled-components';



const DividerBox = styled.div`
    display:flex;
    align-items:center;
`;

const Dividers = styled.div`
    width: 150px;
    height:0;
    border: 0.5px solid #D3D3D3;
    margin: 0 10px;
`;

const Divider = ({}) => {
    return <DividerBox>
        <Dividers></Dividers>or<Dividers></Dividers>
    </DividerBox> 
}


export default Divider;