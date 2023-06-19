import Illustration from "assets/illustration.jpg";
import PlantImage from "assets/plant.jpg";
import DogImage from "assets/dog.jpg";
import Design from "assets/design.jpg";
import UsersGroup from "assets/users-group.jpg";
import Users2 from "assets/usersGroup/2.jpg";

export const tasksList = [
  {
    name: "To Do",
    color: "#5030E5",
    id: "todo",
    canAddNew: true,
    subTasks: [
      {
        priority: "low",
        title: "Brainstorming",
        description:
          "Brainstorming brings team members' diverse experience into play.",
        comments: 12,
        files: 0,
        UsersList: UsersGroup,
      },
      {
        priority: "high",
        title: "Research",
        description:
          "User research helps you to create an optimal product for users.",
        comments: 10,
        files: 3,
        UsersList: Users2,
      },
      {
        priority: "high",
        title: "Wireframes",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
        comments: 2,
        files: 0,
        UsersList: UsersGroup,
      },
    ],
  },
  {
    name: "On Progress",
    color: "#FFA500",
    id: "progress",
    subTasks: [
      {
        priority: "low",
        title: "Onboarding Illustrations ",
        comments: 14,
        files: 15,
        images: [Illustration],
        UsersList: UsersGroup,
      },
      {
        priority: "low",
        title: "Moodboard",
        comments: 9,
        files: 10,
        images: [PlantImage, DogImage],
        UsersList: UsersGroup,
      },
      {
        priority: "high",
        title: "Wireframes",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
        comments: 2,
        files: 0,
        UsersList: UsersGroup,
      },
    ],
  },
  {
    name: "Done",
    color: "#8BC48A",
    id: "done",
    subTasks: [
      {
        priority: "completed",
        title: "Mobile App Design ",
        images: [Design],
        comments: 12,
        files: 15,
        UsersList: UsersGroup,
      },
      {
        priority: "completed",
        title: "Design System",
        description: "It just needs to adapt the UI from what you did before ",
        comments: 12,
        files: 15,
        UsersList: UsersGroup,
      },
    ],
  },
];
