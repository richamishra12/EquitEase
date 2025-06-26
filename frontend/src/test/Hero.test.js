import React from "react";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from "../landing_page/home/Hero";

//test suite
describe('hero component',()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText('Homepage');  //attribute
        expect(heroImage).toBeInTheDocument();   //image should be visible in the screen available honi chahiye
        expect(heroImage).toHaveAttribute("src","images/homeHero.png"); //yhi image honi chahiye

    })
})