import React from "react";
import { AddBook } from "./AddBook";
import { mount, shallow, render } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { BookModel } from "./../../model/book";

describe("Add book", () => {
  let wrap: any;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;
  beforeEach(() => {


    wrap = shallow(<AddBook/>);

    const initialState = {};
     store = mockStore(initialState);
  });
  it("render empty component Add book", () => {
    expect(wrap).toMatchSnapshot();
  });

  it("find a form element", () => {
    wrap.find("form");
  });

  it("find fields in the form", () => {
    const wrapper = shallow(<AddBook />);

    const fields = wrapper
      .find("form")
      .children()
      .map(node => {
        node.props().name;
      });

    const book: BookModel = {
      author: "tim",
      title: "",
      abstract: "",
      itemType: ""
    };

    const list = Object.keys(book);

    expect(fields).toEqual(expect.arrayContaining(list));
  });
});
