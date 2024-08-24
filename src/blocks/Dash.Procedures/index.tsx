interface IDashProceduresProps {
  content: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";
  changeContent: (
    value: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS"
  ) => void;
}

export const DashProcedures = ({
  changeContent,
  content,
}: IDashProceduresProps) => {
  return (
    <>
      <h2>DashProcedures</h2>
    </>
  );
};
