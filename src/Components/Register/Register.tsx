import { useState } from "react";
import styles from "./Register.module.css";
import image from "./assets/image.png";
import { Signup } from "./Signup";
import { Login } from "./Login";
type Props = {};

export const Register = (_props: Props) => {
  const [registerval, Setregisterval] = useState(true);

  return (
    <div className={styles.RegistrationWrapper}>
      <div>
        {registerval ? (
          <Signup setval={Setregisterval} />
        ) : (
          <Login setval={Setregisterval} />
        )}
      </div>
      <div className={styles.ImageContainer}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
