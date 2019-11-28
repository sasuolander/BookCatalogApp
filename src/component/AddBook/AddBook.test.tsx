import React from "react";
import { AddBook } from "./AddBook";
import AddBookContainer from "./AddBookContainer";
import { mount, shallow, render } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";

import { BookModel } from "./../../model/book";

const rootReducer = combineReducers({
  form: formReducer
});

describe("Add book", () => {
  let wrap: any;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store, formComponentWrapper;
  beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);

    wrap = shallow(<AddBook />);
  });
  it("render empty component Add book", () => {
    expect(wrap).toMatchSnapshot();
  });

  it("find a form element", () => {
    wrap.find("form");
  });

  it("find all non-optional fields in the form", () => {
    let fields: string[] = [];

    const book: BookModel = {
      author: "tim",
      title: "",
      abstract: "",
      itemType: ""
    };
    const list = Object.keys(book);

    wrap
      .find("form")
      .children()
      .map((node: any) => {
        fields.push(node.props().name);
      });
    expect(fields).toEqual(expect.arrayContaining(list));
  });
});
