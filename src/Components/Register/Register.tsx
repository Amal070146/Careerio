import { useState } from "react";
import styles from "./Register.module.css";
import image from "./assets/image.png";
import { Signup } from "./Signup";
import { Login } from "./Login";
type Props = {};

export const Register = (_props: Props) => {
  const [registerval, Setregisterval] = useState(true);
  function signup(){
    Setregisterval(true);
  }
  function login() {
    Setregisterval(false);
  }
  return (
    <div className={styles.RegistrationWrapper}>
      <div>
        {registerval ? (
          <Signup val={registerval} />
        ) : (
          <Login val={registerval} />
        )}
      </div>
      <div className={styles.ImageContainer}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
