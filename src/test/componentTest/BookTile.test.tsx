import React from 'react'
import {BookTile} from './../../component/BookTile'
import { mount, shallow, render } from "enzyme";

it("render component book tile",()=>{
    const component = shallow(<BookTile/>)
    expect(component).toMatchSnapshot();
})