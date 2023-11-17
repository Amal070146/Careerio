import styles from "./PostGigs.module.css";
type Props = {};

export const PostGigs = (_props: Props) => {
  return (
    <div className={styles.PostGigWrapper}>
      <div className={styles.InnerConatiner}>
        <DrumsIcon />

        <div className={styles.contentWrapper}>
          <h1>Get started with Gigs</h1>
          <p>
            {" "}
            Let's work together to build gig<br></br> workforce efficiently.
          </p>
        </div>
        <button>Post a Gig!</button>
      </div>
    </div>
  );
};

export const DrumsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="140"
      viewBox="0 0 180 180"
      fill="none"
    >
      <g filter="url(#filter0_d_46_60)">
        <circle cx="90" cy="72" r="50" fill="white" />
      </g>
      <path
        d="M101.094 64.5438V63.3906C101.094 58.1983 93.2618 54.2812 82.875 54.2812C72.4882 54.2812 64.6562 58.1983 64.6562 63.3906V71.6719C64.6562 75.9968 70.0908 79.4335 77.9062 80.4624V81.6094C77.9062 86.8017 85.7382 90.7188 96.125 90.7188C106.512 90.7188 114.344 86.8017 114.344 81.6094V73.3281C114.344 69.0426 109.081 65.6017 101.094 64.5438ZM111.031 73.3281C111.031 76.0651 104.657 79.125 96.125 79.125C95.3528 79.125 94.5868 79.0981 93.8311 79.0484C98.2968 77.4211 101.094 74.7773 101.094 71.6719V67.8915C107.278 68.8128 111.031 71.3137 111.031 73.3281ZM77.9062 77.1064V72.1812C79.5538 72.3958 81.2136 72.5023 82.875 72.5C84.5364 72.5023 86.1962 72.3958 87.8438 72.1812V77.1064C86.1987 77.3495 84.5379 77.4706 82.875 77.4688C81.2121 77.4706 79.5513 77.3495 77.9062 77.1064ZM97.7812 68.7589V71.6719C97.7812 73.4089 95.212 75.2742 91.1562 76.4067V71.5684C93.829 70.9204 96.0919 69.9556 97.7812 68.7589ZM82.875 57.5938C91.4068 57.5938 97.7812 60.6537 97.7812 63.3906C97.7812 66.1276 91.4068 69.1875 82.875 69.1875C74.3432 69.1875 67.9688 66.1276 67.9688 63.3906C67.9688 60.6537 74.3432 57.5938 82.875 57.5938ZM67.9688 71.6719V68.7589C69.6581 69.9556 71.921 70.9204 74.5938 71.5684V76.4067C70.538 75.2742 67.9688 73.4089 67.9688 71.6719ZM81.2188 81.6094V80.7461C81.7632 80.7668 82.3139 80.7812 82.875 80.7812C83.6783 80.7812 84.4629 80.7543 85.2331 80.7088C86.0887 81.0151 86.9601 81.2749 87.8438 81.4872V86.3442C83.788 85.2117 81.2188 83.3464 81.2188 81.6094ZM91.1562 87.0439V82.1062C92.8032 82.3276 94.4632 82.4383 96.125 82.4375C97.7864 82.4398 99.4462 82.3333 101.094 82.1187V87.0439C97.7989 87.527 94.4511 87.527 91.1562 87.0439ZM104.406 86.3442V81.5059C107.079 80.8579 109.342 79.8931 111.031 78.6964V81.6094C111.031 83.3464 108.462 85.2117 104.406 86.3442Z"
        fill="#4318FF"
      />
      <defs>
        <filter
          id="filter0_d_46_60"
          x="0"
          y="0"
          width="180"
          height="180"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="18" />
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.439216 0 0 0 0 0.564706 0 0 0 0 0.690196 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_46_60"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_46_60"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
