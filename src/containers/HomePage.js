import { ArrowSquareUp, Link, Link1 } from "iconsax-react";
import React from "react";
import EditImage from "assets/edit.svg";
import LinkImage from "assets/link.svg";
import AddIcon from "assets/add.svg";
import { TasksDashboard } from "components";
import UsersGroup from "assets/usersGroup/invite.jpg";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 text-5xl items-center text-primary-heading font-medium">
          Mobile App
          <span>
            <img src={EditImage} className="w-8" />
          </span>
          <span>
            <img src={LinkImage} className="w-8" />
          </span>
        </div>
        <div className="flex items-center">
          <img src={AddIcon} className="w-8" />
          <span className="text-primary-link ml-2 mr-3">Invite</span>
          <img src={UsersGroup} className="h-[38px]" />
        </div>
      </div>

      <TasksDashboard />
    </div>
  );
};

export default HomePage;
