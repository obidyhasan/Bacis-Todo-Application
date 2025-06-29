import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/TaskSlice";
import { useAppStore } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppStore(selectTasks);
  // const filters = useAppStore(selectFilters);

  // console.log(tasks);
  // console.log(filters);

  return (
    <div className="mx-auto mt-16">
      <div>
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task?.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
