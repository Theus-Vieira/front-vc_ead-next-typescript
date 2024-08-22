"use client";

import { ReactNode } from "react";

import { Providers } from "@/providers";
import { Styles } from "@/styles";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Config = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Providers>
        <Styles>{children}</Styles>
        <ToastContainer theme="dark" transition={Bounce} />
      </Providers>
    </>
  );
};
