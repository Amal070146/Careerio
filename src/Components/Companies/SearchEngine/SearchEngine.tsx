import styles from "./SearchEngine.module.css";
import defaultProfile from "../../../assets/defaultProfile.png";
import { DjangoLogo, MongoDBLogo, ReactLogo } from "./StackLogo";
type Props = {};

export const SearchEngine = (_props: Props) => {
  const data = [
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
    {
      name: "Google",
      profile: defaultProfile,
      muid: "google@mulearn",
      roles: ["uiux", "dev", "communication"],
    },
  ];

  const stacks = [
    {
      name: "MongoDB",
      image: <MongoDBLogo colors={"white"} />,
    },
    {
      name: "Django",
      image: <DjangoLogo colors={"white"} />,
    },
    {
      name: "React",
      image: <ReactLogo colors={"white"} />,
    },
  ];
  return (
    <div className={styles.SearchEngineWrapper}>
      <div className={styles.SearchBarWrapper}>
        <div>
          <input type="text" placeholder="Search anything..." />
          <button>
            <FilterIcon />
          </button>
        </div>
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className={styles.SearchProfilesWrapper}>
        <h1>Search By Profile</h1>
        <div>
          {data.map(({ name, profile, muid, roles }) => (
            <div key={muid} className="ProfileCard">
              <div>
                <img src={profile} alt={`${name} profile`} />
                <div>
                  <h2>{name}</h2>
                  <p>MUID: {muid}</p>
                </div>
              </div>
              <ul>
                {roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.SearchByStackWrapper}>
        {stacks.map(({ name, image }) => (
          <div className="ProfileCard">
           {image}
           <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FilterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="19"
      viewBox="0 0 28 19"
      fill="none"
    >
      <path
        d="M0.250005 17.4172V17.4167C0.250005 17.0298 0.376218 16.7175 0.626339 16.463C0.876201 16.2086 1.18014 16.0824 1.55496 16.0833H1.55556H7.77778C8.15402 16.0833 8.45867 16.2102 8.70856 16.4645C8.95865 16.7191 9.08423 17.0306 9.08333 17.4161V17.4167C9.08333 17.8036 8.95712 18.1158 8.707 18.3704C8.45714 18.6247 8.1532 18.7509 7.77838 18.75H7.77778H1.55556C1.17932 18.75 0.874674 18.6231 0.624784 18.3688C0.374694 18.1142 0.249112 17.8027 0.250005 17.4172ZM0.250005 9.50058V9.5C0.250005 9.1131 0.376218 8.80088 0.626339 8.54629C0.8762 8.29197 1.18014 8.16577 1.55496 8.16667H1.55556H17.1111C17.4873 8.16667 17.792 8.29352 18.0419 8.54787C18.292 8.80243 18.4176 9.11394 18.4167 9.49942V9.5C18.4167 9.8869 18.2905 10.1991 18.0403 10.4537C17.7905 10.708 17.4865 10.8342 17.1117 10.8333H17.1111H1.55556C1.17932 10.8333 0.874674 10.7065 0.624784 10.4521C0.374694 10.1976 0.249112 9.88606 0.250005 9.50058ZM0.250005 1.58392V1.58334C0.250005 1.19644 0.376218 0.884216 0.626339 0.629628C0.876201 0.375305 1.18014 0.249105 1.55496 0.250005H1.55556H26.4444C26.8207 0.250005 27.1253 0.376858 27.3752 0.631211C27.6253 0.885767 27.7509 1.19728 27.75 1.58276V1.58334C27.75 1.97024 27.6238 2.28246 27.3737 2.53705C27.1238 2.79137 26.8199 2.91757 26.445 2.91667H26.4444H1.55556C1.17932 2.91667 0.874674 2.78982 0.624784 2.53547C0.374694 2.28091 0.249112 1.9694 0.250005 1.58392Z"
        fill="#A3AED0"
        stroke="white"
        stroke-width="0.5"
      />
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="97"
      height="97"
      viewBox="0 0 97 97"
      fill="none"
    >
      <rect width="97" height="97" rx="20" fill="url(#paint0_linear_19_1292)" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M56.2233 53.1214C58.071 50.7393 58.9418 47.7428 58.6585 44.7414C58.3752 41.7401 56.9592 38.9594 54.6985 36.965C52.4378 34.9706 49.5022 33.9124 46.489 34.0057C43.4757 34.0989 40.6112 35.3366 38.4781 37.4669C36.3431 39.5987 35.1014 42.4644 35.0059 45.4799C34.9105 48.4954 35.9684 51.4339 37.9643 53.6965C39.9601 55.9591 42.7435 57.3755 45.7474 57.6571C48.7513 57.9387 51.7495 57.0643 54.1311 55.2121L54.1948 55.2788L60.4803 61.5658C60.6179 61.7034 60.7814 61.8126 60.9613 61.8871C61.1411 61.9617 61.3339 62 61.5286 62C61.7233 62 61.9161 61.9617 62.0959 61.8871C62.2758 61.8126 62.4393 61.7034 62.5769 61.5658C62.7146 61.4281 62.8238 61.2647 62.8983 61.0848C62.9728 60.9049 63.0112 60.7121 63.0112 60.5174C63.0112 60.3228 62.9728 60.13 62.8983 59.9501C62.8238 59.7702 62.7146 59.6068 62.5769 59.4691L56.2899 53.1836C56.2683 53.1623 56.2461 53.1415 56.2233 53.1214ZM53.1472 39.5636C53.9838 40.3866 54.6491 41.3672 55.1049 42.4487C55.5606 43.5302 55.7977 44.6912 55.8025 45.8648C55.8072 47.0384 55.5796 48.2013 55.1327 49.2865C54.6858 50.3716 54.0285 51.3576 53.1986 52.1874C52.3687 53.0173 51.3828 53.6746 50.2976 54.1215C49.2125 54.5685 48.0495 54.7961 46.876 54.7913C45.7024 54.7865 44.5414 54.5494 43.4599 54.0937C42.3784 53.638 41.3978 52.9726 40.5747 52.136C38.9299 50.4642 38.0123 48.2101 38.0219 45.8648C38.0314 43.5195 38.9673 41.273 40.6257 39.6146C42.2841 37.9562 44.5306 37.0203 46.876 37.0107C49.2213 37.0012 51.4753 37.9187 53.1472 39.5636Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_19_1292"
          x1="0"
          y1="0"
          x2="97"
          y2="97"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#868CFF" />
          <stop offset="1" stop-color="#4318FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
