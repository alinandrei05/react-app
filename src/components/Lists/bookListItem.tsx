import React from "react";
import { getListItemStyle } from "./bookList.styles";
import { IBookListItemProps } from "./bookListItem.types";

export const BookListItem = (props: IBookListItemProps): JSX.Element => {
    return (
        <li style={getListItemStyle(props.book.isSelected)} onClick={props.onClick}>
            {props.book.isSelected ? `${props.book.title} is selected` : props.book.title}
        </li>
    );
}