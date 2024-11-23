import { forwardRef, useState } from "react";
import * as S from "./styles";

import { TextareaHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: IconType;
  iconAction?: () => void;
  IconAfter?: boolean;
  iconSize?: string;

  maxRows?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      icon: Icon,
      iconAction,
      IconAfter = true,
      iconSize,
      maxRows = 3,
      ...rest
    },
    ref
  ) => {
    const [rows, setRows] = useState(1);

    const handleKeyPress = (e: any) => {
      if (e.key === "Enter" && !e.shiftKey && !e.altKey && !e.ctrlKey) {
        iconAction && iconAction();
        setRows(1);
      }

      if (e.shiftKey && e.key === "Enter") {
        rows < maxRows && setRows(rows + 1);
      }
    };

    return (
      <S.Container
        iconAction={iconAction}
        iconAfter={IconAfter}
        iconSize={iconSize}
        onKeyDown={handleKeyPress}
      >
        {Icon && !IconAfter && (
          <Icon
            onClick={() => {
              iconAction && iconAction();
              setRows(1);
            }}
          />
        )}
        <textarea rows={rows} ref={ref} {...rest} />
        {Icon && IconAfter && (
          <Icon
            onClick={() => {
              iconAction && iconAction();
              setRows(1);
            }}
          />
        )}
      </S.Container>
    );
  }
);
