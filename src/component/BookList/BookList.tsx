import React, { FunctionComponent } from "react";
import { BookTile } from "../BookTile/BookTile";

interface componentBookListProps {
  books?: [];
}

export const BookList: FunctionComponent<componentBookListProps> = ({
  books
}): JSX.Element => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(books);
  return (
    <div>
      {array.map(id => {
        return <BookTile id={id} />;
      })}
    </div>
  );
};
