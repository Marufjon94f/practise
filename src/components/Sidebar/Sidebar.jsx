import "./Sidebar.scss";
import { Link } from "react-router-dom";

//Images

import Logo from "../../assets/img/logo.png";
// import Home from "../../assets/img/home.png"
// import Dashboard from "../../assets/img/dashboard.png"
// import Slice from "../../assets/img/slice.png"
// import Message from "../../assets/img/message.png"
// import Notification from "../../assets/img/notification.png"
// import Settings from "../../assets/img/settings.png"

import Home from "../../Lib/Svgs/Home";
import Discount from "../../Lib/Svgs/Discount";
import Dashboard from "../../Lib/Svgs/Dashboard";
import Message from "../../Lib/Svgs/Message";
import Notification from "../../Lib/Svgs/Notification";
import Settings from "../../Lib/Svgs/Settings";
import Logout from "../../Lib/Svgs/Logout";

function Sidebar() {
  const handleAddClass = (evt) => {
      const allActiveClasses = document.querySelectorAll(".link-active")

      allActiveClasses.forEach((link)=> 
      link.classList.remove("link-active")) 
    evt.currentTarget.classList.add("link-active");
  };
  return (
    <div className="sidebar">
      <Link className="logo-link" to="/">
        <img className="logo" src={Logo} alt="logo" width="56" height="56" />
      </Link>

      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <span>
              <Home />
            </span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="link" to="/discount" onClick={handleAddClass}>
            <span>
              <Discount />
            </span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="link" to="/dashboard" onClick={handleAddClass}>
            <span>
              <Dashboard />
            </span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="link" to="/messages" onClick={handleAddClass}>
            <span>
              <Message />
            </span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="link" to="/notification" onClick={handleAddClass}>
            <span>
              <Notification />
            </span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="link" to="/settings" onClick={handleAddClass}>
            <span>
              <Settings />
            </span>
          </Link>
        </li>
      </ul>
      <button className="sidebar_btn">
        <Logout />
      </button>
    </div>
  );
}
export default Sidebar;
