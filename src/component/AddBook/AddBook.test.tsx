import React from 'react'
import { AddBook } from "./AddBook";
import { mount, shallow, render } from "enzyme";


describe("Add book",()=>{
    it("render empty component Add book",()=>{
        const component = shallow(<AddBook/>)
        expect(component).toMatchSnapshot();
    })
})

