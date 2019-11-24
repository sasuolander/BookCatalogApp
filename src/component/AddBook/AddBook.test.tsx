import React from 'react'
import { AddBook } from "./AddBook";
import { mount, shallow, render } from "enzyme";

it("render component Add book",()=>{
    const component = shallow(<AddBook/>)
    expect(component).toMatchSnapshot();
})
