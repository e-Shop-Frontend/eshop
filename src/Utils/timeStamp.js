import React from "react";

const Timestamp = ({ time }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = time?.slice(0, 4);
  const month = parseInt(time?.slice(5, 7));
  const day = time?.slice(8, 10);
  const thisMonth = months[month - 1];

  return (
    <h2 className='text-xs'>
      {thisMonth} {day}, {year}
    </h2>
  );
};

export default Timestamp;
