import React from "react";

const tab = ({scroll}) => {
  // checkRealTime = () => {
  //   console.log('scroll',scroll);
  // }
  // setInterval(() => {
  //   console.log('scroll',scroll);
  // }, 1000);
  // console.log('isi dari scroll',scroll);
  return (
    <div>
      <div className="tabs">
        <div className="block">
          <ul className="flex border-b border-gray-200 space-x-3 transition-all duration-300 -mb-px">
            <li>
              <a
                href="javascript:void(0)"
                className="inline-block py-4 px-6 text-gray-500 hover:text-gray-800 font-medium border-b-2 border-transparent tab-active:border-b-indigo-600 tab-active:text-indigo-600 active tablink whitespace-nowrap"
                data-tab="tabs-with-underline-1"
                role="tab"
              >
                {" "}
                Tab 1{" "}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="inline-block py-4 px-6 text-gray-500 hover:text-gray-800 font-medium border-b-2 border-transparent tab-active:border-b-indigo-600 tab-active:text-indigo-600 tablink whitespace-nowrap"
                data-tab="tabs-with-underline-2"
                role="tab"
              >
                {" "}
                Tab 2{" "}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="inline-block py-4 px-6 text-gray-500 hover:text-gray-800 font-medium border-b-2 border-transparent tab-active:border-b-indigo-600 tab-active:text-indigo-600 tablink whitespace-nowrap"
                data-tab="tabs-with-underline-3"
                role="tab"
              >
                {" "}
                Tab 3{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <div
            id="tabs-with-underline-1"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
            className="tabcontent"
          >
            <p className="text-gray-500 dark:text-gray-400">
              {" "}
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                first
              </em>{" "}
              item's tab body.{" "}
            </p>
          </div>
          <div
            id="tabs-with-underline-2"
            className="hidden tabcontent"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-2"
          >
            <p className="text-gray-500 dark:text-gray-400">
              {" "}
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                second
              </em>{" "}
              item's tab body.{" "}
            </p>
          </div>
          <div
            id="tabs-with-underline-3"
            className="hidden tabcontent"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-3"
          >
            <p className="text-gray-500 dark:text-gray-400">
              {" "}
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                third
              </em>{" "}
              item's tab body.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tab;
