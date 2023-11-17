import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { LogoSVG } from "../../../assets/svg";
import {
  DashboardLogo,
  PostGigsIcons,
  ProjectsIcons,
  SearchEngineIcons,
} from "../../../assets/DashboardIcons";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className={styles.NavbarWrapper}>
      <div className={styles.TopSection}>
        <LogoSVG />
        <div>
          <Link to="/" className={styles.activeNav}>
            <div>
              <DashboardLogo colors="#4318FF" />
              Dashboard
            </div>
            <div className={styles.RectangleBox} ></div>
          </Link>
          <Link to="/searchengine" className={styles.inactiveNav}>
            <div>
              <SearchEngineIcons colors={"#A3AED0"} />
              Search Engine
            </div>
            <div
              className={styles.RectangleBox}
              style={{ backgroundColor: "#A3AED0" }}
            ></div>
          </Link>
          <Link to="/posgigs" className={styles.inactiveNav}>
            <div>
              <PostGigsIcons colors={"#A3AED0"} /> Post Gigs
            </div>
            <div
              className={styles.RectangleBox}
              style={{ backgroundColor: "#A3AED0" }}
            ></div>
          </Link>
          <Link to="/exporeprojects" className={styles.inactiveNav}>
            <div>
              <ProjectsIcons colors={"#A3AED0"} />
              Explore Projects
            </div>
            <div
              className={styles.RectangleBox}
              style={{ backgroundColor: "#A3AED0" }}
            >
              {" "}
            </div>
          </Link>
        </div>
      </div>
      <button>Log Out</button>
    </div>
  );
};
