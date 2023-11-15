import { type FormEvent, useState } from "react";
import { CourseGoal } from "../App";

interface NewGoalProps {
  setGoals: React.Dispatch<React.SetStateAction<CourseGoal[]>>;
}

const NewGoal: React.FC<NewGoalProps> = ({ setGoals }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddGoal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    new FormData(e?.currentTarget);
    setGoals((prev: CourseGoal[]) => [
      ...prev,
      {
        title,
        description,
        id: prev.length + Math.floor(Math.random() * 10000),
      },
    ]);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleAddGoal}>
      <label htmlFor="title" />
      <input
        id="title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label htmlFor="description" />
      <input
        id="description"
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
