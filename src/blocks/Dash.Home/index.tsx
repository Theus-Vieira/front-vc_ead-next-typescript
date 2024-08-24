import { useUser } from "@/providers";

interface IDashHomeProps {
  content: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";
  changeContent: (
    value: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS"
  ) => void;
}

export const DashHome = ({ changeContent, content }: IDashHomeProps) => {
  const { user } = useUser();

  return (
    <>
      <h2>DashHome</h2>
      <p>Olá, {user.username}!</p>
    </>
  );
};
