import React from "react";
import SingleNotification from "../../Components/Dashboard/Notification/singleNotification";

const Notification = () => {
  const notifications = [
    {
      title: "You are welcome!!",
      content:
        " Dear John thanks for signing up on eshopafrica. Enjoy shipping from the United state to Nigeria at affordable rate. We look forward to helping you achieve your goals. We are excited to have you on board. Cheers",
    },
    {
      title: "Bonus award!!",
      content:
        " Dear John thanks for signing up on eshopafrica. Enjoy shipping from the United state to Nigeria at affordable rate. We look forward to helping you achieve your goals. We are excited to have you on board. Cheers",
    },
    {
      title: "New Arrival!!",
      content:
        " Dear John thanks for signing up on eshopafrica. Enjoy shipping from the United state to Nigeria at affordable rate. We look forward to helping you achieve your goals. We are excited to have you on board. Cheers",
    },
  ];
  return (
    <div>
      <h2 className='text-xl font-medium'>Notifications</h2>
      <div className='max-w-2xl'>
        {notifications.map((item, index) => {
          return <SingleNotification key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Notification;
