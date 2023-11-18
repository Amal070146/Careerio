import styles from "./ExploreProjects.module.css";
import ey from "../PostGigs/assets/ey.png";

type Props = {};

export const ExploreProjects = (_props: Props) => {
  const data = [
    {
      image: ey,
      name: "careerio",
      title: "Bristol",
      description:
        "Comets are a big source of meteoroids because of the nature of those long tails. A large amount of dust.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
      bgcolor: "blue",
      collabs: [
        "https://shorturl.at/IJKV5",
        "https://shorturl.at/cqSW3",
        "https://shorturl.at/bouY2",
      ],
    },
    // ... more data items if needed
  ];

  return (
    <div className={styles.ExploreProjectsWrapper}>
      {data.map(
        (
          { name, title, description, stacks, collabs },
          index
        ) => (
          <div key={index} className={styles.IndividualWrapper}>
            <div className={styles.FirstSec}>
              <h1>{name}</h1>
              <p>projects</p>
            </div>
            <div className={styles.SecondDiv}>
              {stacks.map((stack, stackIndex) => (
                <p key={stackIndex}>{stack}</p>
              ))}
            </div>
            <div>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div>
                {collabs.map((collab) => (
                <img src={collab} alt="" />
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
