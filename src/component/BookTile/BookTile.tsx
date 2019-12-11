import React, { FunctionComponent } from "react";

type BookTileProps = {
  id: Number;
};
export const BookTile: FunctionComponent<BookTileProps> = ({
  id
}): JSX.Element => {
  return <div>"books number `{id}`"</div>;
};
