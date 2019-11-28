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