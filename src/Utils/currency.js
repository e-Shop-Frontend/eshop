import React from "react";

const Currency = ({ amount, className }) => {
  let priceFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <h2 className={className}>
      {/* &#8358;  */}
      {priceFormat.format(amount)}
    </h2>
  );
};

export default Currency;
