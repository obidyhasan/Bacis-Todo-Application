import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/TaskSlice";
import { useAppDispatch, useAppStore } from "@/redux/hook";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppStore(selectTasks);
  // const filters = useAppStore(selectFilters);

  // console.log(tasks);
  // console.log(filters);

  return (
    <div className="mx-auto mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Tasks</h1>
        <div className="flex items-center gap-4">
          <Tabs defaultValue="All">
            <TabsList>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("All"))}
                className="w-20"
                value="All"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Low"))}
                className="w-20"
                value="Low"
              >
                Low
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Medium"))}
                className="w-20"
                value="Medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("High"))}
                className="w-20"
                value="High"
              >
                High
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <AddTaskModal />
        </div>
      </div>
      <div className="space-y-5 mt-6">
        {tasks.map((task) => (
          <TaskCard task={task} key={task?.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
