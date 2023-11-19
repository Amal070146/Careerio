import styles from "./ExploreProjects.module.css";
import { Link, useNavigate } from "react-router-dom";
import { DrumsIcon } from "../PostGigs/utils/commom";
import { useEffect, useState } from "react";
import { getProject } from "./ExploreProjectsApi";

export const ExploreProjects = () => {

	const [data, setData] = useState<ProjectData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProject();
            setData(result);
        };

        fetchData();
    }, []);
	

    return (
        <div className={styles.ExploreProjectsWrapper}>
            <div className={styles.HeaderSection2}>
                <div>
                    {" "}
                    <DrumsIcon colors="#fff" width={150} height={150} />
                </div>
                <div className={styles.ContentSession}>
                    <h1>Get your work done with Projects!</h1>
                    <p>
                        Are you a company seeking the top talents? Look no
                        further! We are your trusted partner for gig work
                        postings, connecting you with the best freelancers,
                        contractors, and gig workers in the industry. Partner
                        with us today and experience the difference in gig work
                        postings.
                    </p>
                    <Link to="/formpostprojects">Post a Project!</Link>
                </div>
            </div>
            {data.map((project) => (
                <CardProjects
                    name={"careerio"}
                    title={project.title}
                    description={project.description}
                    stacks={project.stack.split(", ")}
                    collabs={[
                        "https://shorturl.at/IJKV5",
                        "https://shorturl.at/cqSW3",
                        "https://shorturl.at/bouY2",
                    ]}
                />
            ))}
        </div>
    );
};

type Props = {
    name?: string;
    title?: string;
    description?: string;
    stacks?: string[];
    collabs?: string[];
};

export const CardProjects = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div
            className={styles.IndividualWrapper}
            onClick={() => navigate(`/project/${props.name}`)}
        >
            <div className={styles.FirstSec}>
                <h1>{props.name}</h1>
                <p>projects</p>
            </div>
            <div className={styles.SecondDiv}>
                {props.stacks?.map((stack, stackIndex) => (
                    <p key={stackIndex}>{stack}</p>
                ))}
            </div>
            <div className={styles.ThirdDiv}>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className={styles.collaborators}>
                    {props.collabs?.map((collab) => (
                        <img src={collab} alt="" />
                    ))}
                </div>
            </div>
        </div>
    );
};
