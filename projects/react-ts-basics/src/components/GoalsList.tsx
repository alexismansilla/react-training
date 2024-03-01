import { type CourseGoal as CGoals } from "../App.tsx";
import CourseGoal from "./CourseGoal.tsx";

type GoalsListProps = {
  goals: CGoals[];
};

function GoalsList({ goals }: GoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default GoalsList;
