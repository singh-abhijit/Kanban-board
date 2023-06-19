import { taskPriority } from "constants";
import { Folder2, Message } from "iconsax-react";
import React from "react";

const TaskDetailsCard = (props) => {
  const { priority, title, description, comments, files, images, UsersList } =
    props;

  console.log("images is ", images);

  const { name: priorityName, color, bg: background } = taskPriority[priority];
  return (
    <div className="p-5 bg-white rounded-2xl text-left basis-1/3">
      <div className="flex">
        {/* Priority */}
        <div
          className="rounded py-1 px-1.5 text-xs font-medium"
          style={{
            color,
            background,
          }}
        >
          {priorityName}
        </div>
      </div>
      <div className=" mt-1.5 font-semibold text-lg text-primary-heading">
        {title}
      </div>
      {description && <div className="my-1.5 text-xs">{description}</div>}
      <div className="flex gap-3 w-full">
        {images?.slice(0, 2).map((taskImage) => (
          <div className={images.length === 2 ? "w-1/2" : "m-auto"}>
            <img
              src={taskImage}
              className="rounded-lg object-cover max-h-[275px]"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-7">
        <img src={UsersList} className="h-6" />
        <div className="flex items-center text-xs">
          <span className="flex mr-[14px]">
            <Message size={"16"} className="mr-[5px]" />
            {comments} comments
          </span>
          <span className="flex">
            <Folder2 size={"16"} className="mr-[5px]" />
            {files} files
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsCard;
