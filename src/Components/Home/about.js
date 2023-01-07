import React from "react";
import about from "../../Assets/images/about.png";
import Btn from "../Button/btn";

const About = () => {
  return (
    <section className='bg-green-50'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  items-center max-width1'>
        <div className='lg:p-12 my-10'>
          <img className='w-full' src={about} alt='about' />
        </div>
        <div>
          <h2 className='text-2xl font-bold'>About eShop Africa</h2>
          <p className='my-4 text-sm'>
            eShopAfrica is a purpose driven Logitech company based in Indiana,
            USA. Also registered with the Corporate Affairs Commission of
            Nigeria. We at eshopAfrica gives African businesses access to global
            commerce and high-quality products. Our mission is to close the
            trade gap, make import simple and give Africans more access to
            international market. Additionally, we offer free virtual dollar
            cards for simple purchase at foreign retailers.
          </p>
          <Btn text='Read More' className='bg-pry mt-8' />
        </div>
      </div>
    </section>
  );
};

export default About;
