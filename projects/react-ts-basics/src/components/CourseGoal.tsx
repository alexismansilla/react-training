import { PropsWithChildren, type ReactNode } from "react";

// Es un opcion para hacerlo

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// Es otra opcion para hacerlo
type CourseGoalProps2 = PropsWithChildren<{ title: string }>;

function CourseGoal({ title, children }: CourseGoalProps2) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
}

export default CourseGoal;
