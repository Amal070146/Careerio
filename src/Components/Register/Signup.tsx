import { useState } from "react";
import { LogoSVG } from "../../assets/svg";
import styles from "./Register.module.css";
import { registerUser } from "./RegisterApis";

type SignupProps = {
    setval: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Signup = ({ setval }: SignupProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        registerUser(formData);
    };
    return (
        <div className={styles.SignupWrapper}>
            <LogoSVG />
            <div className={styles.HeaderSection}>
                <h2>Dedicated to navigating futures and shaping careers.</h2>
            </div>
            <form className={styles.FormWrapper} onSubmit={handleSubmit}>
                <div>
                    <p>Full Name</p>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Robert Langster"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Email</p>
                    <input
                        type="text"
                        name="email"
                        placeholder="robert.langster@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="....."
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.RembForg}>
                    <div>
                        <input type="checkbox" />
                        Remeber Me
                    </div>
                    <div>Forgot Password?</div>
                </div>
                <div className={styles.ButtonWrapper}>
                    <button
                        onClick={() => {
                            setval(false);
                        }}
                    >
                        Log In
                    </button>
                    <button style={{ backgroundColor: "#4318FF" }} type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
            <div className={styles.OtherLogins}>
                <p>Or, Login with</p>
                <a href="">Facebook</a>
                <a href="">LinkedIn</a>
                <a href="">Google</a>
            </div>
        </div>
    );
};
