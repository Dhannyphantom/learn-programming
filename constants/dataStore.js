import { nanoid } from "nanoid";

export const TECH_DATA = [
  {
    id: nanoid(),
    image: "/techs/html.png",
    name: "HTML",
    text: "#FFFFFF",
    bg: "#EC571E",
  },
  {
    id: nanoid(),
    image: "/techs/css.png",
    text: "#FFFFFF",
    name: "CSS",
    bg: "#3472A8",
  },
  {
    id: nanoid(),
    image: "/techs/js.png",
    text: "#000",
    name: "JAVASCRIPT",
    bg: "#F7E318",
  },
  {
    id: nanoid(),
    image: "/techs/react.png",
    text: "#FFFFFF",
    name: "react",
    bg: "#211F20",
  },
  {
    id: nanoid(),
    image: "/techs/git-icon.png",
    text: "#FFFFFF",
    name: "GIT",
    bg: "#000000",
  },
  {
    id: nanoid(),
    image: "/techs/github.png",
    text: "#000",
    name: "github",
    bg: "#E04B32",
  },
  {
    id: nanoid(),
    image: "/techs/nodejs.png",
    text: "#FFFFFF",
    name: "nodejs",
    bg: "#42463B",
  },
  {
    id: nanoid(),
    image: "/techs/express.png",
    text: "#FFFFFF",
    name: "express",
    bg: "#838283",
  },
  {
    id: nanoid(),
    image: "/techs/mongodb.png",
    text: "#000",
    name: "mongodb",
    bg: "#F1F2F1",
  },
  {
    id: nanoid(),
    image: "/techs/nextjs.png",
    text: "#000",
    name: "next.js",
    bg: "#FFFFFF",
  },
  {
    id: nanoid(),
    image: "/techs/rnative.png",
    text: "#FFFFFF",
    name: "react native",
    bg: "#000",
  },
  {
    id: nanoid(),
    image: "/techs/adobe_xd.png",
    text: "#FFFFFF",
    name: "adobe xd",
    bg: "#35001f",
  },
];

export const boxData = [
  {
    id: nanoid(),
    name: "gender",
    icon: ["fas", "venus"],
    value: "Male",
    selected: false,
  },
  {
    id: nanoid(),
    name: "gender",
    icon: ["fas", "mars"],
    value: "Female",
    selected: false,
  },
];

export const pcData = [
  {
    id: nanoid(),
    name: "gender",
    icon: ["fas", "thumbs-up"],
    value: "Yes",
    selected: true,
  },
  {
    id: nanoid(),
    name: "gender",
    icon: ["fas", "thumbs-down"],
    value: "No",
    selected: false,
  },
];

export const navTab = [
  {
    id: nanoid(),
    name: "home",
    active: true,
    scroll: true,
    path: "/",
  },
  {
    id: nanoid(),
    name: "users",
    active: false,
    scroll: true,
    path: "/users",
  },
  {
    id: nanoid(),
    name: "ask",
    active: false,
    scroll: true,
    path: "/ask",
  },
  {
    id: nanoid(),
    name: "payment",
    active: false,
    scroll: true,
    path: "/payment",
  },
  {
    id: nanoid(),
    name: "about",
    active: false,
    scroll: false,
    path: "/#whatYouLearn",
  },
];
