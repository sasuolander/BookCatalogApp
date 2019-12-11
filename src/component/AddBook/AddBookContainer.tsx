import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { AddBook } from "./AddBook";
import { addBookAction } from "../../redux/booksList/bookListAction";
import { Dispatch } from "redux";
import { ListOfBookState, BookModel } from "../../model/StateOfApp";

interface formProps {}

interface StateFromProps extends ListOfBookState {}
interface mapDispatchToProps {
  addBookFunction: Function;
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addBookFunction: (book: BookModel) => dispatch(addBookAction(book))
});

const AddBookContainer = reduxForm<formProps>({ form: "addbook" })(AddBook);

const mapStateToProps = (state: any) => ({
  books: state.mainlist.books
});

export default connect<StateFromProps, mapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(AddBookContainer);
