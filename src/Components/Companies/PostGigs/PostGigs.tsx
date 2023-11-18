import { Link } from "react-router-dom";
import styles from "./PostGigs.module.css";
import { useState } from "react";
import ey from "./assets/ey.png";
type Props = {};

export const PostGigs = (_props: Props) => {
  const [firstEntry, SetfirstEntry] = useState(false);

  SetfirstEntry(false);
  const data = [
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
    },
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
    },
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
    },
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
    },
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
    },
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
    },
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork", "some"],
    },
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
    },
    {
      image: ey,
      name: "ey",
      role: "UI/UX Designer",
      description:
        "We are looking for passionate designers with atleast 2+ experience in the same field, should have thorough understanding of Figma.",
      stacks: ["UX Designer", "Figma", "Teamwork"],
    },
  ];

  return (
    <>
      {firstEntry ? (
        <div className={styles.PostGigWrapper}>
          <div className={styles.InnerConatiner}>
            <DrumsIcon colors="#4318FF" width={50} height={50} />

            <div className={styles.contentWrapper}>
              <h1>Get started with Gigs</h1>
              <p>
                {" "}
                Let's work together to build gig<br></br> workforce efficiently.
              </p>
            </div>
            <Link to="/formpostgig">Post a Gig!</Link>
          </div>
        </div>
      ) : (
        <div className={styles.PostGigWorkWrapper}>
          <div className={styles.HeaderSection2}>
            <div>
              {" "}
              <DrumsIcon colors="#fff" width={150} height={150} />
            </div>
            <div className={styles.ContentSession}>
              <h1>Get your work done with Gigs!</h1>
              <p>
                Are you a company seeking the top talents? Look no further! We
                are your trusted partner for gig work postings, connecting you
                with the best freelancers, contractors, and gig workers in the
                industry. Partner with us today and experience the difference in
                gig work postings.
              </p>
              <Link to="/formpostgig">Post a Gig!</Link>
            </div>
          </div>
          <div className={styles.AvailableGigsWrapper}>
            <h1>Currently available gigs</h1>
            <div className={styles.DataBlockWrapper}>
              {data.map(({ name, image, role, description, stacks }) => (
                <div className={styles.IndividualWrapper}>
                  <div className={styles.firstDiv}>
                    <img src={image} alt="" />
                    <p>{name}</p>
                  </div>
                  <div className={styles.SecondDiv}>
                    <h1>{role}</h1>
                    <p>{description}</p>
                    <div className={styles.StacksWrapper}>
                      {stacks.map((stacks, index: any) => (
                        <p key={index}>{stacks}</p>
                      ))}
                    </div>
                  </div>
                  <div className={styles.ThirdDiv}>
                    <p>Upto</p>
                    <h1>20K</h1>
                    <p>INR</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

type DrumsIconProps = {
  colors: string;
  width: number;
  height: number;
};

export const DrumsIcon = ({ colors, width, height }: DrumsIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 145 131"
      fill="none"
    >
      <circle
        cx="72.3906"
        cy="65.0908"
        r="65.0908"
        fill="url(#paint0_radial_54_3005)"
        fill-opacity="0.2"
      />
      <path
        d="M105.333 42.115V42.9913L106.202 43.1064C117.759 44.6372 127.268 47.8838 133.856 52.2348C140.448 56.5878 144 61.9539 144 67.7498V91.9165C144 98.9304 138.703 105.312 129.336 109.996C120.007 114.661 106.878 117.5 91.8333 117.5C76.7888 117.5 63.6597 114.661 54.3306 109.996C44.9633 105.312 39.6667 98.9304 39.6667 91.9165V88.5694V87.6925L38.7972 87.578C27.4923 86.0896 17.9819 82.8673 11.3282 78.5131C4.6671 74.154 1 68.7612 1 62.9165V38.7498C1 31.7359 6.2966 25.3544 15.6639 20.6704C24.9931 16.0055 38.1222 13.1665 53.1667 13.1665C68.2112 13.1665 81.3403 16.0055 90.6694 20.6704C100.037 25.3544 105.333 31.7359 105.333 38.7498V42.115ZM84.7968 83.5034L85.0736 85.4408C87.2993 85.5872 89.5566 85.6665 91.8333 85.6665C104.392 85.6665 115.401 83.416 123.304 80.1266C127.253 78.4833 130.468 76.5633 132.714 74.4989C134.946 72.4481 136.333 70.1451 136.333 67.7498C136.333 65.9648 135.505 64.1858 134.105 62.5245C132.7 60.858 130.666 59.2419 128.102 57.7558C122.973 54.782 115.595 52.2532 106.481 50.8953L105.333 50.7244V51.8844V62.9165C105.333 71.3089 97.7366 78.7882 84.7968 83.5034ZM37.6667 78.7759V79.639L38.5205 79.7651C43.3696 80.4815 48.265 80.8385 53.1667 80.8332C58.0684 80.8385 62.9637 80.4815 67.8128 79.7651L68.6667 79.639V78.7759V64.4028V63.264L67.5375 63.4111C62.7729 64.032 57.9729 64.34 53.1681 64.3332L53.1653 64.3332C48.3605 64.34 43.5604 64.032 38.7959 63.4111L37.6667 63.264V64.4028V78.7759ZM97.6667 54.4159V52.4821L96.0887 53.5999C91.2883 57.0001 84.8104 59.7726 77.0977 61.6426L76.3333 61.8279V62.6144V76.7338V78.0513L77.6023 77.697C83.5927 76.0243 88.5437 73.7956 92.0215 71.2991C95.4528 68.8359 97.6667 65.9474 97.6667 62.9165V54.4159ZM10.2447 53.5999L8.66667 52.4821V54.4159V62.9165C8.66667 65.9474 10.8806 68.8359 14.3118 71.2991C17.7896 73.7956 22.7406 76.0243 28.7311 77.697L30 78.0513V76.7338V62.6144V61.8279L29.2356 61.6426C21.5229 59.7726 15.0451 57.0001 10.2447 53.5999ZM48.3713 88.3979L47.3333 88.3584V89.3971V91.9165C47.3333 94.9474 49.5472 97.8359 52.9785 100.299C56.4563 102.796 61.4073 105.024 67.3977 106.697L68.6667 107.051V105.734V91.5601V90.7719L67.9003 90.5877C65.3567 89.9766 62.848 89.2286 60.3852 88.3469L60.1929 88.2781L59.9891 88.2901C57.7584 88.422 55.4885 88.4998 53.1667 88.4998C51.5463 88.4998 49.9527 88.458 48.3713 88.3979ZM76.3333 107.776V108.64L77.1883 108.765C86.8997 110.189 96.7669 110.189 106.478 108.765L107.333 108.64V107.776V93.4028V92.264L106.204 92.4111C101.44 93.032 96.6395 93.34 91.8347 93.3332H91.8328C87.0281 93.3355 82.2285 93.0156 77.4666 92.3754L76.3333 92.2231V93.3665V107.776ZM115 105.734V107.051L116.269 106.697C122.259 105.024 127.21 102.796 130.688 100.299C134.119 97.8359 136.333 94.9474 136.333 91.9165V83.4159V81.4821L134.755 82.5999C129.955 86.0001 123.477 88.7726 115.764 90.6426L115 90.8279V91.6144V105.734ZM97.6667 38.7498C97.6667 36.3546 96.2792 34.0516 94.0477 32.0008C91.8015 29.9364 88.5859 28.0164 84.6376 26.3731C76.7339 23.0837 65.7251 20.8332 53.1667 20.8332C40.6083 20.8332 29.5994 23.0837 21.6958 26.3731C17.7475 28.0164 14.5318 29.9364 12.2856 32.0008C10.0542 34.0516 8.66667 36.3546 8.66667 38.7498C8.66667 41.1451 10.0542 43.4481 12.2856 45.4989C14.5318 47.5633 17.7475 49.4833 21.6958 51.1266C29.5994 54.416 40.6083 56.6665 53.1667 56.6665C65.7251 56.6665 76.7339 54.416 84.6376 51.1266C88.5859 49.4833 91.8015 47.5633 94.0477 45.4989C96.2792 43.4481 97.6667 41.1451 97.6667 38.7498Z"
        fill={colors}
        stroke="url(#paint1_linear_54_3005)"
        stroke-width="2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_54_3005"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(72.3906 65.0908) rotate(90) scale(65.0908)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_54_3005"
          x1="2"
          y1="26"
          x2="147"
          y2="99.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7A6FFF" />
          <stop offset="0.383568" stop-color="#7F74FF" />
          <stop offset="0.617911" stop-color="#8174FF" />
          <stop offset="1" stop-color="#6857FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
