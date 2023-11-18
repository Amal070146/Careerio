import { LogoSVG } from "../../../assets/svg";
import { MongoDBLogo, DjangoLogo, ReactLogo } from "../SearchEngine/StackLogo";
import styles from "./Project.module.css";
import defaultImage from '../../../assets/defaultProfile.png'

export const Project = () => {
  const stacks = [
    {
      name: "MongoDB",
      image: <MongoDBLogo colors={"#4C27FF"} />,
    },
    {
      name: "Django",
      image: <DjangoLogo colors={"#4C27FF"} />,
    },
    {
      name: "React",
      image: <ReactLogo colors={"#4C27FF"} />,
    },
  ];
  return (
    <div className={styles.ProjectWrapper}>
      <div className={styles.TitleSection}>
        <h2>Bristol - Intelligent Personal Assistant</h2>
        <LogoSVG />
      </div>
      <div className={styles.StackContainer}>
        {stacks.map(({ name, image }) => (
          <div className={styles.StackButton}>
            {image}
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className={styles.DescriptionSectionWrapper}>
        <p>
          In this project, we will develop an intelligent personal assistant
          powered by artificial intelligence (AI) technologies. The goal of this
          project is to create a versatile and user-friendly AI assistant that
          can assist users in various tasks, streamline their daily activities,
          and provide valuable information and recommendations.
        </p>
        <div className={styles.DelivarablesContent}>
          <h4> Project Deliverables: </h4>
          <p>
            {" "}
            A functional AI-powered personal assistant application Documentation
            detailing the system architecture, algorithms, and APIs used User
            manuals and tutorials for using the AI assistant Source code and
            version control (e.g., Git repository) In this project, we will
            develop an intelligent personal assistant powered by artificial
            intelligence (AI) technologies. The goal of this project is to
            create a versatile and user-friendly AI assistant that can assist
            users in various tasks, streamline their daily activities, and
            provide valuable information and recommendations. In this project,
            we will develop an intelligent personal assistant powered by
            artificial intelligence (AI) technologies. The goal of this project
            is to create a versatile and user-friendly AI assistant that can
            assist users in various tasks, streamline their daily activities,
            and provide valuable information and recommendations.
          </p>
        </div>
      </div>
      <div className={styles.ProjectImageWrapper}>
        <h3>Project Images</h3>
        <div className={styles.ProjectImageContent}>
          <div>
            <LogoSVG />
          </div>
          <div>
            <LogoSVG />
          </div>
          <div>
            <LogoSVG />
          </div>
        </div>
      </div>
      <div className={styles.ContributorsWrapper}>
        <h3>Contributors</h3>
        <div className={styles.ContributorsTeamWrapper}>
          <div className={styles.IndivualContributor}>
            <img src={defaultImage} alt="" />
            <span>John Doe</span>
          </div>{" "}
          <div className={styles.IndivualContributor}>
            <img src={defaultImage} alt="" />
            <span>John Doe</span>
          </div>{" "}
          <div className={styles.IndivualContributor}>
            <img src={defaultImage} alt="" />
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
};
