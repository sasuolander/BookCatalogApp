import React from 'react'
import {BookTile} from './BookTile'
import { mount, shallow, render } from "enzyme";

describe("Book tile",()=>{
    it("render component book tile",()=>{
        const component = shallow(<BookTile/>)
        expect(component).toMatchSnapshot();
    })
})

