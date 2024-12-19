import React from "react";

const AdminPage = () => {
  return (
    <div>
      <div className="vertical_menu">
        <button
          type="button"
          className="btn btn-sm font-size-24 header-item waves-effect vertical-menu-btn px-3"
        >
          <i className="bx" />
        </button>
        <div className="sidebar_menu_scroll mb-10 mt-[75px]">
          <div className="sidebar_mask">
            <div className="content_wrapper">
              <div id="sidebar-menu">
                <ul className=" list-style-none m-0 p-0 ">
                  <li className="menu-title">DashBoard</li>
                  <li className="active block w-full py-4">
                    <a href="http://">
                      <i className=" m-auto block size-5" />{' '}
                      <span className=" ml-0 ">Profile</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_content"></div>
    </div>
  );
};

export default AdminPage;
