import React from 'react'

const CouponCard = ({ title, minTransaction, code, onCopy }) => {
  return (
    <div className="card-coupon boxshadow-coupon">
      <div className="card-content flex w-full px-8 justify-between">
        <div className="icon">🚗</div>
        <div className="details">
          <h3>{title}</h3>
          <p>min. transaksi {minTransaction}</p>
        </div>
        <div className="">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            accentcolor="#687176"
            fillcolor="#0194F3"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#687176"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 11.5V16M11.75 7.75H12.25V8.25H11.75V7.75Z"
              stroke="#0194F3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="divider"></div>
      <div className="code-section w-full px-5">
        <span className="code text-gray-500 w-full  ">{code}</span>
        <button className="copy-button">Copy</button>
      </div>
    </div>
  );
};

export default CouponCard;