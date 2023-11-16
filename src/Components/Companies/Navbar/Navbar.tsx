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
          <Link to="/">
            <DashboardLogo colors="#4318FF" />
            Dashboard
          </Link>
          <Link to="/searchengine">
            <SearchEngineIcons colors={"#A3AED0"} />
            Search Engine
          </Link>
          <Link to="/posgigs">
            <PostGigsIcons colors={"#A3AED0"} /> Post Gigs
          </Link>
          <Link to="/exporeprojects">
            <ProjectsIcons colors={"#A3AED0"} />
            Explore Projects
          </Link>
        </div>
      </div>
      <button>Log Out</button>
    </div>
  );
};
