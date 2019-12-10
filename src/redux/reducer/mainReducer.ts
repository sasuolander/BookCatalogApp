import { combineReducers } from "redux";
import {bookList as books}from "../booksList/booksReducer"
import { reducer as formReducer } from 'redux-form';

//export default combineReducers({book,books});

export default combineReducers({
mainlist:books,
form:formReducer
})
