import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display:inline-flex;
    flex-direction:column;
`;

const InputBox = styled.div`
    margin-bottom: 10px;
`;

const ForgotPw = styled.a`
    text-align:right;
    text-decoration: none;
    color:#000;
`;

const Input = ({}) => {
    return <Form>
            <h2>Signup For an account</h2>
            EMAIL
            <InputBox> <input type="email" id="email" name="email" placeholder="Email" /></InputBox>
            PASSWORD
            <InputBox><input type="password" id="pwd" name="pwd" placeholder="Password"
            pattern="[A-Za-z]{6,20}" required="required"/></InputBox>
            <ForgotPw><a href="#">Forgot passoword?</a></ForgotPw>
        </Form>
     
}


Input.defaultProps = {
    
}

export default Input;