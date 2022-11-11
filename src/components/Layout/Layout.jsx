import "./Layout.scss";
import NavBar from "../NavBar/NavBar";
import LeftBar from "../Leftbar/LeftBar";
import RightBar from "../RightBar/RightBar";
import { Outlet } from "react-router-dom";
import "../../style.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
function Layout() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"} `}>
      <NavBar />
      <div className="layout">
        <LeftBar />
        <div className="outlet">
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default Layout;
