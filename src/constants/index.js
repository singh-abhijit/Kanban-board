import {
  Category,
  Message,
  Profile2User,
  Setting2,
  TaskSquare,
} from "iconsax-react";

export const sidebarNavOptions = [
  {
    name: "Home",
    icon: <Category />,
  },
  {
    name: "Messages",
    icon: <Message />,
  },
  {
    name: "Tasks",
    icon: <TaskSquare />,
  },
  {
    name: "Members",
    icon: <Profile2User />,
  },
  {
    name: "Settings",
    icon: <Setting2 />,
  },
];

export const myProjects = [
  {
    name: "Mobile App",
    color: "#7AC555",
    isActive: true,
  },
  {
    name: "Website Redesign",
    color: "#FFA500",
  },
  {
    name: "Design System",
    color: "#E4CCFD",
  },
  {
    name: "Wireframes",
    color: "#76A5EA",
  },
];

export const taskPriority = {
  low: {
    name: "Low",
    color: "#D58D49",
    bg: "#DFA87433",
  },
  high: {
    name: "Low",
    color: "#D8727D",
    bg: "#D8727D1A",
  },
  completed: {
    name: "Completed",
    color: "#68B266",
    bg: "#83C29D33",
  },
};
