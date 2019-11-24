import React from 'react'
import { Navigation } from "./Navigation";
import { mount, shallow, render } from "enzyme";

it("render component Navigation",()=>{
    const component = shallow(<Navigation/>)
    expect(component).toMatchSnapshot();
})