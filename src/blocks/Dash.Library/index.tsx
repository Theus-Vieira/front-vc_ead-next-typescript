import Link from "next/link";
import * as S from "./styles";
import * as C from "@/components";
import * as control from "@/controllers";
import { v4 as uuid } from "uuid";

export const DashLibrary = () => {
  return (
    <S.Container>
      <h2>Biblioteca</h2>

      <p>
        Aqui você poderá baixar todas as indicações de livros e estudos para a
        sua edificação.
      </p>

      <div className="box-links">
        {control.books.map((bk) => (
          <C.BookCard key={uuid()} book={bk} />
        ))}
      </div>
    </S.Container>
  );
};
