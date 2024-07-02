import React from "react";
import "./bar.css";

const Right = () => {
  return (
    <div className="rightbar">
      <div className="email">
        <a href="mailto: priyanshukashyap884@gmail.com">priyanshukashyap884@gmail.com</a>
      </div>

      <div className="rbr">
        <svg
          width="8"
          height="445"
          viewBox="0 0 8 445"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5"
            y="445"
            width="2"
            height="445"
            transform="rotate(-180 5 445)"
            fill="url(#paint0_linear_40_7)"
          />
          <circle
            cx="4"
            cy="4"
            r="4"
            transform="rotate(-180 4 4)"
            fill="#8C2DED"
          />
          <defs>
            <linearGradient
              id="paint0_linear_40_7"
              x1="6"
              y1="445"
              x2="6"
              y2="890"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0" />
              <stop offset="1" stop-color="#932FF8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Right;
