import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/TaskSlice";
import { useAppDispatch } from "@/redux/hook";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-md", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1
            className={cn("text-lg font-semibold", {
              "line-through": task.isCompleted,
            })}
          >
            {task?.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="flex gap-3 items-center"
          >
            <Trash2 className="w-4 text-red-400" />
          </button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p className="mt-4">{task?.description}</p>
    </div>
  );
};

export default TaskCard;
