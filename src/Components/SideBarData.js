import React from "react";
import ExtensionIcon from "@material-ui/icons/Extension";
import MoodIcon from "@material-ui/icons/Mood";
export const SideBarData = [
  {
    title: "Dashboard",
    icon: <ExtensionIcon fontSize="small" />,
    link: "/table",
  },
  {
    title: "Candidates",
    icon: <MoodIcon fontSize="small" />,
    link: "/candidate",
  },
  {
    title: "Employees",
    icon: <ExtensionIcon fontSize="small" />,
    link: "/employees",
  },
  {
    title: "Attendance",
    icon: <MoodIcon fontSize="small" />,
    link: "/attendance",
  },
  {
    title: "Holidays",
    icon: <ExtensionIcon fontSize="small" />,
    link: "/holidays",
  },
];

export const MediaData = [
  {
    title: "Images",
    icon: <ExtensionIcon fontSize="small" />,
    link: "/images",
  },
  {
    title: "comment",
    icon: <ExtensionIcon fontSize="small" />,
    link: "/comment",
  },
];
