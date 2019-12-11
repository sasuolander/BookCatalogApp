import React from "react";
import { AddBook, componentAddProps } from "./AddBook";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { BookModel } from "./../../model/StateOfApp";

const rootReducer = combineReducers({
  form: formReducer
});

describe("Add book", () => {
  let wrap: any;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store, formComponentWrapper;

  // @ts-ignore
  const defaultProps: componentAddProps = {
    handleSubmit() {
      return;
    },
    books: [],
    addBookFunction() {
      return;
    }
  };

  beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);

    wrap = shallow(<AddBook {...defaultProps} />);
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
      .find(".add-book")
      .children(".input")
      .map((node: any) => {
        fields.push(node.props().name);
      });
    expect(fields).toEqual(expect.arrayContaining(list));
  });

  it("find all non-optionan labels in the form", () => {
    let labels: string[] = [];
    const expectedLabels: string[] = ["Title", "Author", "Abstract", "Type"];

    wrap
      .find("form")
      .find(".add-book")
      .children(".label")
      .map((node: any) => {
        labels.push(node.props().children);
      });

    expect(labels).toEqual(expect.arrayContaining(expectedLabels));
  });
});
