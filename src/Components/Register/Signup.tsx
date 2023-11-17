import { LogoSVG } from "../../assets/svg"
import styles from './Register.module.css'

type SignupProps = {
  setval: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Signup = ({ setval }: SignupProps) => {
  return (
    <div className={styles.SignupWrapper}>
      <LogoSVG />
      <div className={styles.HeaderSection}>
        <h2>Dedicated to navigating futures and shaping careers.</h2>
      </div>
      <form className={styles.FormWrapper}>
        <div>
          <p>Full Name</p>
          <input type="text" placeholder="Robert Langster" />
        </div>
        <div>
          <p>Email</p>
          <input type="text" placeholder="robert.langster@gmail.com" />
        </div>
        <div>
          <p>Password</p>
          <input type="passwprd" placeholder="....." />
        </div>
        <div className={styles.RembForg}>
          <div>
            <input type="checkbox" checked />
            Remeber Me
          </div>
          <div>Forgot Password?</div>
        </div>
      </form>
      <div className={styles.ButtonWrapper}>
        <button
          onClick={() => {
            setval(false);
          }}
        >
          Log In
        </button>
        <button style={{ backgroundColor: "#4318FF" }}>Sign Up</button>
      </div>
      <div className={styles.OtherLogins}>
        <p>Or, Login with</p>
        <a href="">Facebook</a>
        <a href="">LinkedIn</a>
        <a href="">Google</a>
      </div>
    </div>
  );
};