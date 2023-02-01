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
import warn from "../../Assets/images/warn.png";
import { benefit } from "../../Utils/referral";

const Referral = () => {
  const [isReferral, setIsReferral] = useState(false);
  const shareURL = "http://post.eafrica,com/u/S5TUI";
  return (
    <div className=''>
      <h1 className='text-lg font-medium'>Referrals</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div>
          <p className='text-xs'>
            Share your link with your friends and family to earn 5 points
          </p>
          <h2 className='text-sm my-3'>Your referral link</h2>
          <div className='bg-gray-100 p-3 flex items-center gap-4 w-fit border-2 px-6 my-4 rounded-md shadow-xl'>
            <h2 className='text-xs'>http://post.eafrica,com/u/S5TUI</h2>
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
          <div className='my-10'>
            {isReferral ? (
              <div>
                <h2 className='my-4 text-sm'>Total Referral: 0</h2>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center'>
                <img className='w-16' src={warn} alt='warning' />
                <p className='text-sm font-medium my-4'>
                  You do not have any referral yet
                </p>
              </div>
            )}
          </div>
        </div>
        <div className='rounded-md border shadow-md p-6'>
          <h2 className='text-center text-lg font-medium'>
            How to benefit from referrals
          </h2>
          {benefit.map(({ img, title, text }, i) => {
            return (
              <div className='flex gap-3 my-4' key={i}>
                <img className='h-fit w-6' src={img} alt={title} />
                <div>
                  <h2 className='text-sm font-medium'>{title}</h2>
                  <p className='text-sm my-2'>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Referral;
