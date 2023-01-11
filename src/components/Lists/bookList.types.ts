export interface IBookListProps {
    books: IBook[];
}

export interface IBook {
    title: string;
    isSelected?: boolean;
}