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
