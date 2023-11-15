import { useEffect, useState } from "react";
import "./App.css";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  const handleAddGoal = (title: string, description: string) => {
    setGoals((prev) => {
      const newGoal = { ...prev, id: Math.random(), title, description };
      return [...prev, newGoal];
    });
  };

  const onClickdel = (id: number) => {
    setGoals((prev: CourseGoal[]) => {
      const updatedGoals = prev.filter(
        (upgoal: CourseGoal) => upgoal.id !== id
      );
      return updatedGoals;
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={onClickdel} />
    </main>
  );
};

export default App;
