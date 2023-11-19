import { useState } from "react";
import { LogoSVG } from "../../assets/svg";
import styles from "./Register.module.css";
import { loginUser } from "./RegisterApis";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { comingSoon } from "../Companies/PostGigs/utils/commom";

type SignupProps = {
    setval: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Login = ({ setval }: SignupProps) => {
	const navigate = useNavigate()
    // State to store form data
    const [loginData, setLoginData] = useState<LoginUserData>({
        email: "",
        password: "",
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prevLoginData) => ({
            ...prevLoginData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.promise(loginUser(loginData), {
            loading: "Logging in...",
            success: () => {
                navigate("/"); 
                return "Login Successful!";
            },
            error: "Login failed. Please try again.",
        });
    };

    return (
      <div className={styles.SignupWrapper}>
        <LogoSVG />
        <div className={styles.HeaderSection}>
          <h2>Dedicated to navigating futures and shaping careers.</h2>
          <p>Welcome Back, Please login to your account</p>
        </div>
        <form className={styles.FormWrapper} onSubmit={handleSubmit}>
          <div className={styles.InputContent}>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="robert.langster@gmail.com"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.InputContent}>
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="....."
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.ButtonWrapper}>
            <button style={{ backgroundColor: "#4318FF" }} type="submit">
              Log In
            </button>
            <button
              onClick={() => {
                setval(true);
              }}
              style={{ color: "#4318FF" }}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className={styles.OtherLogins} onClick={comingSoon}>
          <p>Or, Login with</p>
          <a href="">Facebook</a>
          <a href="">LinkedIn</a>
          <a href="">Google</a>
        </div>
      </div>
    );
};
