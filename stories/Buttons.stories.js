import React from 'react';
import Buttons from '../comps/Buttons';

export default {
  title: 'Example/Buttons',
  component: Buttons
};


export const GoogleButton = () => <Buttons bccolor='#4285F4' text='Login with Google' google={true} />; 
export const LoginButton = () => <Buttons bccolor='#3D6FF1' text='Login' google={false}/>;
export const SignupButton = () => <Buttons bccolor='#D79B9B' text='Signup' google={false}/>;
