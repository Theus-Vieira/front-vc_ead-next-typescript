import * as T from "@/types";
import * as S from "./styles";
import Link from "next/link";

interface IBookCardProps {
  book: T.IBook;
}

export const BookCard = ({ book }: IBookCardProps) => {
  return (
    <Link
      href={book.path}
      download={`${book.name} - ${book.author}`}
      target="_blank"
      title={`${book.name} - ${book.author}`}
    >
      <S.Container>
        <img
          src={book.image}
          alt={book.name}
          title={`${book.name} - ${book.author}`}
        />

        <h2>{book.name}</h2>
        <h3>{book.author}</h3>
      </S.Container>
    </Link>
  );
};
