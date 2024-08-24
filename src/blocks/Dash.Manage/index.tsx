interface IDashManageProps {
  content: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";
  changeContent: (
    value: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS"
  ) => void;
}

export const DashManage = ({ changeContent, content }: IDashManageProps) => {
  return (
    <>
      <h2>DashManage</h2>
    </>
  );
};
