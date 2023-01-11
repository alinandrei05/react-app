import { IBook } from "./bookList.types";

export interface IBookListItemProps {
    book: IBook;
    onClick: (event: any) => void;
}