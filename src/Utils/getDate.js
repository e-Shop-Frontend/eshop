import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

export const TodayDate = () => {
  if (day === 1) {
    return (
      <span className='text-xs md:text-base'>
        {month} {day}st, {year}
      </span>
    );
  } else if (day === 2) {
    return (
      <span className='text-xs md:text-base'>
        {month} {day}nd, {year}
      </span>
    );
  } else if (day === 3) {
    return (
      <span className='text-xs md:text-base'>
        {month} {day}rd, {year}
      </span>
    );
  } else {
    return (
      <span className='text-xs md:text-base'>
        {month} {day}th, {year}
      </span>
    );
  }
};

const currentTime = new Date().getHours();
let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

export const Greet = ({ user }) => {
  return (
    <h1 className='text-base'>
      {greeting}, <span className=' font-medium'>{user}</span>
    </h1>
  );
};
