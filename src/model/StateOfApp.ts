export interface BookModel {
  author: String;
  title: String;
  itemType: String;
  abstract: String;
  date?: Date;
  isbn?: Number;
  DOI?: String;
  pages?: Number;
}

export interface ListOfBookState extends StatusOfAction {
  books: BookModel[];
}

export interface StatusOfAction {
  hasErrored?: Boolean;
}
