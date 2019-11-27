import React, { FunctionComponent } from "react";

type BookTileProps = {
  id: Number;
};
export const BookTile: FunctionComponent<BookTileProps> = ({ id }) => {
  return <div>"books number `{id}`"</div>;
};
