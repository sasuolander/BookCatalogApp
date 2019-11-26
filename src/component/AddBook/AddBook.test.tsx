import React from 'react'
import  AddBook  from "./AddBook";
import { mount, shallow, render } from "enzyme";


describe("Add book",()=>{
    it("render empty component Add book",()=>{
        const wrap = shallow(<AddBook/>)
        expect(wrap).toMatchSnapshot();
    })
    
    it("find a form element",()=>{
        const wrap = shallow(<AddBook/>)
        wrap.find("form")
       
    })

    it("find fields in the form",()=>{
        const wrap = shallow(<AddBook/>)

        const fields =wrap.find("form").children().map(node=>{node.props().name})
        
        const list=[
            "test",
            "test2"
        ]

        expect(fields).toEqual(expect.arrayContaining(list))

    })
})
const tim:Number="tim";
