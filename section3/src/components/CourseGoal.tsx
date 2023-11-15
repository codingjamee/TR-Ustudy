import { FC, PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   description: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, id, onDelete }) => {
  return (
    <div>
      <h2>{title}</h2>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CourseGoal;
