import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
              {/* <button className="btn btn-square btn-ghost"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              {/* </button> */}
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li className="">
                <a>Dashboard</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>Adoptions</a>
              </li>
              <li>
                <a>Pet-Exchange</a>
              </li>
              <li>
                <a>Pet-Keeping</a>
              </li>
              <li>
                <a>Buy/Sell</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
