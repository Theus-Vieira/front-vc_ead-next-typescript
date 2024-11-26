import * as S from "./styles";
import * as C from "@/components";
import * as T from "@/types";
import * as control from "@/controllers";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export const DashLibrary = () => {
  const [viewBooks, setViewBooks] = useState<T.IBook[]>([]);
  const [filter, setFilter] = useState<string>("");

  const filterBooks = (value: string) => {
    if (value === "") {
      setViewBooks([]);
      return;
    }

    value = value.trim().toLowerCase();

    const newBooksToShow = control.books.filter(
      (bk) =>
        bk.name.toLowerCase().includes(value) ||
        bk.author.toLowerCase().includes(value)
    );

    setViewBooks(newBooksToShow);
  };

  useEffect(() => {
    filterBooks(filter);
  }, [filter]);

  return (
    <S.Container>
      <h2>Biblioteca</h2>

      <p>
        Aqui você poderá baixar todas as indicações de livros e estudos para a
        sua edificação.
      </p>

      <div className="container-actions">
        <C.Input
          placeholder="Pesquisar livro"
          height="100%"
          icon={FiSearch}
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>

      <div className="box-links">
        {filter === ""
          ? control.books.map((bk) => <C.BookCard key={uuid()} book={bk} />)
          : viewBooks.map((bk) => <C.BookCard key={uuid()} book={bk} />)}
      </div>
    </S.Container>
  );
};
