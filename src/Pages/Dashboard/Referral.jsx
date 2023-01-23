import React, { useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import { MdContentCopy } from "react-icons/md";

const Referral = () => {
  const shareURL = "kjhklj";
  return (
    <div className=''>
      <h1 className='text-lg font-medium'>Referrals</h1>

      <p className='text-xs'>
        Share your link with your friends and family to earn 5 points
      </p>
      <h2 className='text-sm my-3'>Your referral link</h2>
      <div className='bg-gray-100 p-3 flex items-center gap-4 w-fit border-2 px-6 my-4 rounded-md shadow-xl'>
        <h2>http://post.eafrica,com/u/S5TUI</h2>
        <i className='text-green-400 text-xl bg-green-100'>
          <MdContentCopy />
        </i>
      </div>
      <div className='flex gap-3 items-center'>
        <WhatsappShareButton url={shareURL}>
          <WhatsappIcon round size={30} />
        </WhatsappShareButton>
        <TwitterShareButton url={shareURL}>
          <TwitterIcon round size={30} />
        </TwitterShareButton>
        <FacebookShareButton url={shareURL}>
          <FacebookIcon round size={30} />
        </FacebookShareButton>
        <LinkedinShareButton url={shareURL}>
          <LinkedinIcon round size={30} />
        </LinkedinShareButton>
        <TelegramShareButton url={shareURL}>
          <TelegramIcon round size={30} />
        </TelegramShareButton>
      </div>

      <h2 className='my-4 text-sm'>Total Referral: 0</h2>
    </div>
  );
};

export default Referral;
