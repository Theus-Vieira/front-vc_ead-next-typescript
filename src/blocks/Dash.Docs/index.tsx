interface IDashDocsProps {
  content: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";
  changeContent: (
    value: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS"
  ) => void;
}

export const DashDocs = ({ changeContent, content }: IDashDocsProps) => {
  return (
    <>
      <h2>DashDocs</h2>
    </>
  );
};
