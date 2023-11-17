import React, { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { TopNav } from "../Navbar/TopNav";
import styles from "./HeroSection.module.css";

type Props = {
  children: ReactNode;
};

export const HeroSection = (props: Props) => {
  return (
    <div className={styles.HeroSectionWrapper}>
      <div className={styles.SideNavbarWrapper}>
        <Navbar />
      </div>
      <div className={styles.RightSectionWrapper}>
        <TopNav />

        <Outlet />
      </div>
    </div>
  );
};
