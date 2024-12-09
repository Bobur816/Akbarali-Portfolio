import MainNav from "./MainNav";
import avatar from "../assets/images/avatar.png";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";

import { useState } from "react";

function Sidebar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleClose() {
    setIsNavOpen(false);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={avatar} alt="avatar" />
        <h3>Akbarali Khasanov</h3>
        <p>UX/UI Designer</p>
        <button onClick={() => setIsNavOpen((e) => !e)} className="sidebar-mobile-btn">
          {isNavOpen ? <HiMiniXMark /> : <HiBars3 />}
        </button>
      </div>
      <MainNav isNavOpen={isNavOpen} handleClose={handleClose} />
    </div>
  );
}

export default Sidebar;
