import { useState } from "react";
import * as S from "./styles";
import * as C from "@/components";

interface IEnrollmentProps {
  callbackFinish: () => void;
}

export const EnrollmentForm = ({ callbackFinish }: IEnrollmentProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setError("");
  };

  const isAgeValid = (date: string): boolean => {
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    return (
      age > 16 ||
      (age === 16 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate) {
      setError("Por favor, selecione uma data.");
      return;
    }

    if (!isAgeValid(selectedDate)) {
      setError("Você precisa ter 16 anos ou mais.");
      return;
    }

    setError("");
    callbackFinish();
    window.open("https://forms.gle/iiag1nAofTb6shsAA", "_blank");
  };

  return (
    <>
      <S.Container onSubmit={handleSubmit}>
        <h2>Inscrição</h2>

        <C.Input
          label="Data de nascimento:"
          type="date"
          height="3.5rem"
          max={getCurrentDate()}
          value={selectedDate}
          onChange={handleDateChange}
        />
        <C.Button type="submit" radius=".8rem" height="3rem">
          Inscrever-se
        </C.Button>
        {error && <p>{error}</p>}
      </S.Container>
    </>
  );
};
