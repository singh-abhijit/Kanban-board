import { tasksList } from "constants/tasks";
import React from "react";
import AddIcon from "assets/add.svg";
import TaskDetailsCard from "./TaskDetailsCard";

const TasksDashboard = () => {
  return (
    <div className="tasks-dashboard">
      {tasksList.map((tasksType) => {
        const { name, color, id, subTasks, canAddNew } = tasksType;
        return (
          <div className="task-list-container">
            <div className="flex items-center justify-between mb-6">
              <span className="flex items-center font-medium text-base">
                <div
                  className={`rounded-full w-2 h-2 mr-2`}
                  style={{ background: color }}
                />
                &nbsp;{name}
              </span>
              <span>{canAddNew && <img src={AddIcon} className="w-6" />}</span>
            </div>
            <hr style={{ borderTop: `3px solid ${color}` }} />

            {/*  */}
            <div className="flex flex-col gap-5 mt-7">
              {subTasks.map(TaskDetailsCard)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TasksDashboard;
