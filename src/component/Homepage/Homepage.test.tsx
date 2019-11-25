import React from 'react'
import { Homepage } from "./Homepage";
import { mount, shallow, render } from "enzyme";

describe("Homepage",()=>{
    it("render component homepage",()=>{
        const component = shallow(<Homepage/>)
        expect(component).toMatchSnapshot();
    })
})

