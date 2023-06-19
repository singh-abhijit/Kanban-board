import { sidebarNavOptions, myProjects } from "constants";
import { AddSquare, More } from "iconsax-react";
import React from "react";
import TodaysThoughts from "./TodaysThoughts";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="nav-options">
        {sidebarNavOptions.map((navOptionDetails) => {
          const { name, icon } = navOptionDetails;
          return (
            <div className="option" key={`nav-option-${name}`}>
              {icon}
              <span className="font-medium">{name}</span>
            </div>
          );
        })}
      </div>

      <hr className="bg-border-primary mx-4" />

      <div className="flex justify-between items-center px-[22px] pt-[30px]">
        <span className="font-bold">MY PROJECTS</span>
        <span>
          <AddSquare />
        </span>
      </div>
      <div className="projects-nav">
        {myProjects.map((projectDetails) => {
          const { color, name, isActive } = projectDetails;
          return (
            <div
              key={`project-${name}`}
              className={`project-link ${isActive ? "active-link" : ""}`}
            >
              <div
                className={`rounded-full w-2 h-2`}
                style={{ background: color }}
              />
              <span className="mr-auto">{name}</span>

              {isActive && <More className="expand" />}
            </div>
          );
        })}
      </div>
      <TodaysThoughts />
    </div>
  );
};

export default SideBar;
