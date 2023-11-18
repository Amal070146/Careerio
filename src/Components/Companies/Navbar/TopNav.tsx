import { Notificationsvg } from "../../../assets/svg";
import styles from "./Navbar.module.css";
import defaultProfile from "../../../assets/defaultProfile.png";
import { useNavigate } from "react-router-dom";

export const TopNav = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.TopNAvbarWrapper}>
            <div>
                <p>Hi Amal,</p>
                <h1>Welcome to Careerio!</h1>
            </div>
            <div className={styles.ButtonWrapper}>
                <button>
                    <Notificationsvg />
                </button>
                <button
                    className={styles.profileButton}
                    onClick={() => {
                        navigate("/profile/1");
                    }}
                >
                    <img src={defaultProfile} alt="" />
                </button>
            </div>
        </div>
    );
};
