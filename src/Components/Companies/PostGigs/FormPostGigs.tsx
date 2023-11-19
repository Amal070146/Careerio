import { useState } from "react";
import styles from "./FormPostGig.module.css";
import toast from "react-hot-toast";
import { addGig } from "./PostGigApis";
import { useNavigate } from "react-router-dom";

export const FormPostGigs = () => {
    const skillData = ["Python", "React", "Django", "Flask", "Node", "Express"];

    // Initial state for the form
    const [formData, setFormData] = useState<GigFormData>({
        title: "",
        companyName: "",
        description: "",
        qualifications: "",
        responsibilities: "",
        budget: "",
        duration: "",
        skills: [],
    });

    // Handle change in input fields
    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle skill selection
    const handleSkillSelect = (skill: string) => {
        setFormData((prevState) => ({
            ...prevState,
            skills: prevState.skills.includes(skill)
                ? prevState.skills.filter((s) => s !== skill)
                : [...prevState.skills, skill],
        }));
    };

    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const newId = Date.now();
        const newGig = { ...formData, id: newId };
        if (
            !formData.title ||
            !formData.companyName ||
            !formData.description ||
            !formData.qualifications ||
            !formData.responsibilities ||
            !formData.budget ||
            !formData.duration ||
            formData.skills.length === 0
        ) {
            toast.error("Please fill in all fields.");
            return;
        }

        toast.promise(addGig(newGig), {
            loading: "Loading...",
            success: () => {
                navigate("/postgigs");
                return "Project added!";
            },
            error: "Failed to add project. Please try again.",
        });
        handleClear();
    };

    // Clear form data
    const handleClear = () => {
        setFormData({
            title: "",
            companyName: "",
            description: "",
            qualifications: "",
            responsibilities: "",
            budget: "",
            duration: "",
            skills: [],
        });
    };

    const [inputVisible, setInputVisible] = useState(false);

    const triggerInput = () => {
        setInputVisible(!inputVisible);
    };

    const [newSkill, setNewSkill] = useState("");

    const handleNewSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSkill(e.target.value);
    };

    const handleAddSkill = () => {
        if (newSkill && !formData.skills.includes(newSkill)) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                skills: [...prevFormData.skills, newSkill],
            }));
            setNewSkill(""); // Reset the new skill input
        }
    };

    return (
        <div className={styles.FormPostWrapper}>
            <h1>Post a Gig</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.InputContentWrapper}>
                    <div className={styles.BasicDetailsWrap}>
                        <div>
                            <p>Title</p>
                            <input
                                type="text"
                                name="title"
                                placeholder="UI/UX Designer"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <p>Company Name</p>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="FAYA"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <p>Budget(Approx*)</p>
                            <input
                                type="text"
                                name="budget"
                                placeholder="20,000 Rs"
                                value={formData.budget}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <p>Expected Duration</p>
                            <input
                                type="text"
                                name="duration"
                                placeholder="2 Weeks"
                                value={formData.duration}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.Description}>
                        <p>Description</p>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className={styles.Description}>
                        <p>Key Responsibilities:</p>
                        <textarea
                            name="responsibilities"
                            value={formData.responsibilities}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className={styles.Description}>
                        <p>Qualifications:</p>
                        <textarea
                            name="qualifications"
                            value={formData.qualifications}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className={styles.skillsRequired}>
                    <h2>Skill Required</h2>
                    <div>
                        {skillData.map((skill, index) => {
                            if (!formData.skills.includes(skill)) {
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleSkillSelect(skill)}
                                        className=""
                                    >
                                        {skill}
                                    </button>
                                );
                            } else {
                                return null;
                            }
                        })}
                        {formData.skills.map((skill, index) => (
                            <button
                                key={`selected-${index}`}
                                type="button"
                                onClick={() => handleSkillSelect(skill)}
                                className={styles.selected}
                            >
                                {skill}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={triggerInput}
                            className={inputVisible ? styles.selected : ""}
                        >
                            +
                        </button>
                        {inputVisible && (
                            <>
                                <input
                                    type="text"
                                    value={newSkill}
                                    onChange={handleNewSkillChange}
                                />
                                <button type="button" onClick={handleAddSkill}>
                                    Add
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.ButtonWrapper}>
                    <button type="submit">Post Project</button>
                    <button
                        type="button"
                        onClick={handleClear}
                        style={{ backgroundColor: "white", color: "#4c27ff" }}
                    >
                        Clear all
                    </button>
                </div>
            </form>
        </div>
    );
};
