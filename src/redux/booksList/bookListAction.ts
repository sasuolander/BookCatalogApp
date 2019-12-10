import { ADD_BOOK } from "../constant";
import { BookModel } from "../../model/StateOfApp";

export const addBookAction = (book: BookModel) => ({
  type: ADD_BOOK.SUCCESS,
  payload: book
});
const removeBook = (action: any, payload: Number) => {};
