import * as S from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export interface ISelectProps {
  label: string;
  activeOption: string;
  options: string[];

  setActiveOption: (value: string) => void;
}

export const Select = ({
  label,
  activeOption,
  options,
  setActiveOption,
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <span>{label}</span>
      <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
        <span>{activeOption}</span>
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <S.BoxOptions
          className="box-opt"
          transition={{
            duration: 4,
            type: "spring",
            stiffness: 100,
          }}
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          {options.map((opt, index) => (
            <span
              key={index}
              onClick={() => {
                setActiveOption(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </span>
          ))}
        </S.BoxOptions>
      )}
    </S.Container>
  );
};
