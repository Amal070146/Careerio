import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { TopNav } from "../Navbar/TopNav";
import styles from "./HeroSection.module.css";
import { useEffect } from "react";

export const HeroSection = () => {
	const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        // Check if there's no access token.
        if (!accessToken) {
            navigate("/login");
            return;
        }
        
    }, [navigate]);

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
