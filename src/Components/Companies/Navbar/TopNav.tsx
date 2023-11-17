import { Notificationsvg } from "../../../assets/svg";
import styles from "./Navbar.module.css";
import defaultProfile from '../../../assets/defaultProfile.png'
type Props = {};

export const TopNav = (props: Props) => {
  return (
    <div className={styles.TopNAvbarWrapper}>
      <div>
        <p>Hi Amal,</p>
        <h1>Welcome to Careerio!</h1>
      </div>
      <div className={styles.ButtonWrapper}>
        <button><Notificationsvg /></button>
        <button className={styles.profileButton}><img src={defaultProfile} alt="" /></button>
      </div>
    </div>
  );
};
