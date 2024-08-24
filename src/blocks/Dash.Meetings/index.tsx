interface IDashMeetingsProps {
  content: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";
  changeContent: (
    value: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS"
  ) => void;
}

export const DashMeetings = ({
  changeContent,
  content,
}: IDashMeetingsProps) => {
  return (
    <>
      <h2>DashMeetings</h2>
    </>
  );
};
