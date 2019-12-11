import React, { FunctionComponent } from "react";
import { Field, InjectedFormProps } from "redux-form";
import { BookModel } from "./../../model/StateOfApp";

interface componentAddProps extends InjectedFormProps {
  books?: [];
  addBookFunction?: Function;
}

export const AddBook: FunctionComponent<componentAddProps> = ({
  handleSubmit,
  books,
  addBookFunction
}): JSX.Element => {
  const createBookObject = (data: any): BookModel => {
    const book: BookModel = {
      title: data.title,
      author: data.author,
      abstract: data.abstract,
      itemType: data.itemType
    };
    return book;
  };

  const addtoBook = (data: any) => {
    const book = createBookObject(data);
    addBookFunction!(book);
    console.log(books, book);
  };

  return (
    <div className={"form-container"}>
      <p>test</p>
      <form>
        <div className={"add-book"}>
          <label className={"label title"}>Title</label>
          <Field
            className={"input type"}
            name={"title"}
            type={"text"}
            component="input"
          />
        </div>

        <div className={"add-book"}>
          <label className={"label author"}>Author</label>
          <Field
            className={"input type"}
            name={"author"}
            type={"text"}
            component="input"
          />
        </div>

        <div className={"add-book"}>
          <label className={"label abstract"}>Abstract</label>
          <Field
            className={"input type"}
            name={"abstract"}
            type={"text"}
            component="input"
          />
        </div>

        <div className={"add-book"}>
          <label className={"label type"}>Type</label>
          <Field
            className={"input type"}
            name={"itemType"}
            type={"text"}
            component="input"
          />
        </div>
        <div className={"container-btn"}>
          <button
            type={"submit"}
            className={"add-book-btn"}
            onClick={handleSubmit(data => {
              addtoBook(data);
            })}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
