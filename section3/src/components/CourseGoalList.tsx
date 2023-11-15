import React from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoal as typeCoal } from "../App";

type CourseGoal = {
  goals: typeCoal[];
  // setGoals: React.Dispatch<React.SetStateAction<string>>;
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoal) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li style={{ listStyle: "none" }} key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            onDelete={onDeleteGoal}
            // setGoals={setGoals}
          >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
