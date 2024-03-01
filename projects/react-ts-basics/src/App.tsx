import { useState } from "react";
import "./App.css";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import GoalsList from "./components/GoalsList.tsx";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "My New Goal",
        description: "My New Goal Description",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: "", alt: "A list of goals" }}>
        <h2>Course Goals</h2>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <GoalsList goals={goals} />
    </main>
  );
}

export default App;
