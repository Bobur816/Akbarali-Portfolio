import { NavLink } from "react-router-dom";
import { HiEnvelope, HiMiniHome, HiMiniUserCircle, HiRectangleStack } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

type MainNavPorps = {
  isNavOpen: boolean;
  handleClose: () => void;
};

function MainNav({ isNavOpen, handleClose }: MainNavPorps) {
  return (
    <div className={`sidebar-bottom ${isNavOpen ? "active" : ""}`}>
      <nav className="sidebar-nav">
        <ul onClick={handleClose}>
          <li>
            <NavLink to="/dashboard">
              <HiMiniHome />
              <span>Homepage</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <HiRectangleStack />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <HiMiniUserCircle />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <HiEnvelope />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-socials">
        <p>FOLLOW</p>
        <ul>
          <li>
            <a href="https://twitter.com/XasanovAkbarali" target="blank">
              <FaXTwitter />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/akbaralikhasanov/" target="blank">
              <FaLinkedin />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/AkbaraliKhasanov" target="blank">
              <FaGithub />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNav;
