import React from 'react'
import { BookList } from "./../../component/BookList";
import { mount, shallow, render } from "enzyme";

it("render component Book list",()=>{
    const component = shallow(<BookList/>)
    expect(component).toMatchSnapshot();
})