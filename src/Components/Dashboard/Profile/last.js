import React from "react";

// import doc from "../../../Assets/images/doc.png";
import Btn from "../../Button/btn";
import profile from "../../../Assets/images/profile.jpg";
const Last = ({ prevSlide }) => {
  return (
    <div>
      <div className='my-5'>
        <img src={profile} alt='image' className='w-24 h-24 rounded-full' />

        <div>
          <h2>First Name</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            John
          </h2>
        </div>
        <div>
          <h2>Last Name</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            Doe
          </h2>
        </div>
        <div>
          <h2>Phone Number</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            080123456789
          </h2>
        </div>
        <div>
          <h2>Email</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            Johndoe@gmail.com
          </h2>
        </div>
        <div>
          <h2>Date of Birth</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            12/12/2000
          </h2>
        </div>

        <Btn text={"Edit"} className='bg-pry' onClick={prevSlide} />
      </div>
    </div>
  );
};

export default Last;
