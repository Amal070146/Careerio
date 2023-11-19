import { useState } from "react";
import styles from "./FormPostProjects.module.css";
import toast from "react-hot-toast";
import { addProject } from "../ExploreProjectsApi";
import { useNavigate } from "react-router-dom";



export const FormPostProjects = () => {
    const skillData = ["Python", "React", "Django", "Flask", "Node", "Express"];
    const [inputVisible, setInputVisible] = useState(false);

    // Initial state for the form
    const [formData, setFormData] = useState<ProjectFormData>({
        title: "",
        companyName: "",
        description: "",
		deliverables: "",
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

	const navigate = useNavigate()
    // Handle form submission
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const newProject = { ...formData};

        toast.promise(addProject(newProject), {
            loading: "Loading...",
            success: () => {
                navigate("/exploreprojects");
                return "Project added!";
            },
            error: "Failed to add project. Please try again.",
        });

        handleClear()
    };

    // Clear form data
    const handleClear = () => {
        setFormData({
            title: "",
            companyName: "",
            description: "",
			deliverables: "",
            skills: [],
        });
    };

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
            <h1>Post a Project</h1>
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
                        <p>Project Deliverables:</p>
                        <textarea
                            name="deliverables"
                            value={formData.deliverables}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className={styles.skillsRequired}>
                    <h2>Skill Required</h2>
                    <div>
                        {skillData.map((skill, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => handleSkillSelect(skill)}
                                className={
                                    formData.skills.includes(skill)
                                        ? styles.selected
                                        : ""
                                }
                            >
                                {skill}
                            </button>
                        ))}
                        {formData.skills.map((skill, index) => (
                            <button
                                key={index}
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
