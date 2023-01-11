import React from "react";
import { IBook, IBookListProps } from "./bookList.types";
import { BookListItem } from "./bookListItem";

export const BookList = (props: IBookListProps): JSX.Element => {
    const [books, setBooks] = React.useState<IBook[]>(props.books);

    const getUpdatedBooks = (clickedItemTitle: string): IBook[] => {
        return books.map((book: IBook) => {
            if (book.title === clickedItemTitle)
                return { ...book, isSelected: true }
            return { ...book, isSelected: false };
        });
    }

    const handleOnClickItem = (event: any): void => {
        const clickedItem: string = event.target.textContent;
        const updatedBooks: IBook[] = getUpdatedBooks(clickedItem);

        setBooks(updatedBooks);
    }

    return (
        <ul style={{ width: 250 }}>
            {books.map(book => <BookListItem book={book} onClick={handleOnClickItem} />)}
        </ul>);
}


