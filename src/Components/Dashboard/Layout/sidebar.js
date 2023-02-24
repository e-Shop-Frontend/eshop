import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../../../Utils/dashboardMenu";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../Redux/features/dashboardSlice";
const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const logout = () => {};
  return (
    <div
      className={`fixed top-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition w-[80%] md:w-[30%] lg:w-[20%] bg-sec text-white h-screen p-8 pt-28 z-10`}
    >
      <div className='h-full overflowHide'>
        {menus.map(({ menu, url, img }, i) => {
          return (
            <Link
              className='flex items-center gap-4 my-8'
              to={url}
              key={i}
              onClick={() => {
                dispatch(setLocation(menu));
                closeSidebar();
              }}
            >
              <img className='w-5' src={img} alt={menu} />
              <h2 className='text-sm font-medium'>{menu}</h2>
            </Link>
          );
        })}
        <Link
          to='/'
          className='flex items-center gap-4 mt-20 font-medium'
          onClick={logout}
        >
          <i className='text-xl'>
            <CiLogout />
          </i>
          <h2>Logout</h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
