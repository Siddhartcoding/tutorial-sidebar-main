import React, { useState } from "react";
import Profile from "../Images/profile.png";
import { CgPerformance } from "react-icons/cg";
import Support from "../Images/support.svg";
import { useLocation , Link} from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { GrTransaction } from "react-icons/gr";
import { FiActivity } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

const Sidebar = () => {
    const {theme , toggleTheme} = useTheme(); 
    
    const location = useLocation();

    const [closeMenu, setCloseMenu] = useState(false);

    const toggleMode = () => {
        toggleTheme();
      };

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div
                className={
                    closeMenu === false
                        ? "logoContainer"
                        : "logoContainer active"
                }
            >
                {/* <img src={Icon} alt="icon" className="logo" /> */}
                <FiActivity className="logo" />
                <h2 className="title">SehatAi. </h2>
            </div>
            <div
                className={
                    closeMenu === false
                        ? "burgerContainer"
                        : "burgerContainer active"
                }
            >
                <div
                    className="burgerTrigger"
                    onClick={() => {
                        handleCloseMenu();
                    }}
                ></div>
                <div className="burgerMenu"></div>
            </div>
           
            <div
                className={
                    closeMenu === false
                        ? "contentsContainer"
                        : "contentsContainer active"
                }
            >
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                       {/* <img src={Dashboard} alt="dashboard" /> */}
                        <MdSpaceDashboard className="icon" />
                       <Link to={"/"}>  <span>dashboard</span></Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/transactions"
                                ? "active"
                                : ""
                        }
                        >
                       {/* <img src={Transactions} alt="transactions" /> */}
                       <GrTransaction className="icon"/>
                       <Link to={"/transactions"}>  <span>transactions</span></Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/performance" ? "active" : ""
                        }
                    >
                        {/* <img src={Performance} alt="Performance" /> */}
                        <CgPerformance className="icon" />
                        <Link to={"/performance"}> <span>performance</span></Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/news" ? "active" : ""
                        }
                    >
                       <FaRegNewspaper className="icon"/>
                       <Link to={"/news"} ><span>news</span></Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/settings" ? "active" : ""
                        }
                    >
                      <IoSettingsOutline className="icon" />
                       <Link to={"/settings"}> <span>settings</span></Link>
                    </li>
                  <li
                        className={
                            location.pathname === "/support" ? "active" : ""
                        }
                    >
                       <MdSupportAgent  className="icon"/>
                        <Link to={"/support"}> <span>support</span></Link>
                    </li>
                    <div className="mode-switch">
                     <label>
                      <input
                         type="checkbox"
                        onChange={toggleMode}
                       checked={theme === "dark"}
                      />
                       <span className="slider round"></span>
                         </label>
                         
                      </div>


                    <div
                      className={
                        closeMenu === false
                        ? "profileContainer"
                        : "profileContainer active"
                     }
                      >
                      <img src={Profile} alt="profile" className="profile" />
                       <div className="profileContents">
                      <p className="name">Hello, Siddharth👋</p>
                      <p>sid@gmail.com</p>
                     </div>
                  </div>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
