import img1 from "../assets/users/person1.jpg";
import img2 from "../assets/users/person2.jpg";
import img3 from "../assets/users/person3.jpg";
import img4 from "../assets/users/person4.jpg";

const statusOptions = ["Available", "Do not disturb", "In a meeting"];

export const users = [
  {
    name: "Gabriel Konchito",
    img: img1,
    timestamp: "10:30",
    statusOptions,
    currentStatus: statusOptions[1],
  },
  {
    name: "Miguel Putpoudak",
    img: img2,
    timestamp: "11:30",
    statusOptions,
  },
  {
    name: "Konchita",
    img: img3,
    timestamp: "10:30",
    statusOptions,
  },
  {
    name: "Tautvydas",
    img: img4,
    timestamp: "10:54",
    statusOptions,
  },
];
