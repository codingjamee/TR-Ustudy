import { type FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, description: string) => void;
};
const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  const handleAddGoal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredDescription = description.current!.value;

    onAddGoal(enteredGoal, enteredDescription);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleAddGoal}>
      <p>
        <label htmlFor="title" />
        <input id="title" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="description" />
        <input id="description" type="text" ref={description} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
