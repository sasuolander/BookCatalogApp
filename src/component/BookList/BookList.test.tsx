import React from 'react'
import { BookList } from "./BookList";
import { mount, shallow, render } from "enzyme";

it("render component Book list",()=>{
    const component = shallow(<BookList/>)
    expect(component).toMatchSnapshot();
})