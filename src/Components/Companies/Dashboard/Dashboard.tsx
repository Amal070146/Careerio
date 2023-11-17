import styles from './Dashboard.module.css'
import image from './assets/image.png'
import graph from './assets/Graph.png'

type Props = {};

export const Dashboard = (_props: Props) => {
  return (
    <div className={styles.DashboardWrapper}>
      <div className={styles.LeftSession}>
        <div className={styles.TopSection}>
          <div className={styles.FirstDiv}>
            <h1>263</h1>
            <p>
              Toal<br></br>Hired
            </p>
            <TotalHiredSvg />
          </div>
          <div className={styles.SecondDiv}>
            {" "}
            <h1>263</h1>
            <p>
              Hired this<br></br>month
            </p>
            <GraphImage />
          </div>
        </div>
        <div className={styles.BottomSection}>
          <div className={styles.contentSession}>
            <h2>Search for the talented!</h2>
            <p>
              Connect with talented individuals who perfectly match your job
              requirements.
            </p>
            <button>Search Now</button>
          </div>
          <div className={styles.imageConatiner}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.RightSession}>
        <div className={styles.InsiteSection}>
          {" "}
          <h1>2263</h1>
          <p>
            Profile
            <br></br>Visits
          </p>
          <InsiteGraph />
        </div>
        <div className={styles.GraphConatiner}>
          <h1>Profile Visit</h1>
          <img src={graph} alt="" />
        </div>
      </div>
    </div>
  );
};


export const TotalHiredSvg = ()=>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="40"
      viewBox="0 0 107 44"
      fill="none"
    >
      <path
        d="M2 42C2 42 9.39216 -6.1067 27.8971 16.1772C46.4021 38.4611 53.7943 37.4376 60.8571 20.2278C69.5877 -1.04557 101.772 17.2715 105 2"
        stroke="url(#paint0_linear_18_1032)"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_18_1032"
          x1="-2.12002"
          y1="47.0633"
          x2="71.4509"
          y2="-28.1784"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}


export const GraphImage = ()=>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="87"
      height="46"
      viewBox="0 0 87 46"
      fill="none"
    >
      <rect
        x="79.4564"
        y="45.5705"
        width="45.5705"
        height="7.22715"
        rx="3.61358"
        transform="rotate(-90 79.4564 45.5705)"
        fill="#E9EDF7"
      />
      <rect
        x="79.4564"
        y="45.5705"
        width="10.8668"
        height="7.22716"
        rx="3.61358"
        transform="rotate(-90 79.4564 45.5705)"
        fill="#4318FF"
      />
      <rect
        x="59.7804"
        y="45.5705"
        width="45.5705"
        height="7.22709"
        rx="3.61355"
        transform="rotate(-90 59.7804 45.5705)"
        fill="#E9EDF7"
      />
      <rect
        x="59.7804"
        y="45.5705"
        width="41.364"
        height="7.22716"
        rx="3.61358"
        transform="rotate(-90 59.7804 45.5705)"
        fill="#4318FF"
      />
      <rect
        x="40.1053"
        y="45.5705"
        width="45.5705"
        height="7.22716"
        rx="3.61358"
        transform="rotate(-90 40.1053 45.5705)"
        fill="#E9EDF7"
      />
      <rect
        x="40.1053"
        y="45.5705"
        width="31.5488"
        height="7.22717"
        rx="3.61358"
        transform="rotate(-90 40.1053 45.5705)"
        fill="#4318FF"
      />
      <rect
        x="20.4303"
        y="45.5705"
        width="45.5705"
        height="7.22717"
        rx="3.61359"
        transform="rotate(-90 20.4303 45.5705)"
        fill="#E9EDF7"
      />
      <rect
        x="20.4303"
        y="45.5705"
        width="23.4863"
        height="7.22717"
        rx="3.61358"
        transform="rotate(-90 20.4303 45.5705)"
        fill="#4318FF"
      />
      <rect
        x="0.754272"
        y="45.5705"
        width="45.5705"
        height="7.22717"
        rx="3.61359"
        transform="rotate(-90 0.754272 45.5705)"
        fill="#E9EDF7"
      />
      <rect
        x="0.754272"
        y="45.5705"
        width="37.508"
        height="7.22719"
        rx="3.61359"
        transform="rotate(-90 0.754272 45.5705)"
        fill="#4318FF"
      />
    </svg>
  );
}

export const InsiteGraph = () =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <path
        d="M9.28417 13.3135H9.55785C10.6115 13.3135 11.4736 14.1756 11.4736 15.2293V24.8081C11.4736 25.8618 10.6115 26.7239 9.55785 26.7239H9.28417C8.2305 26.7239 7.36841 25.8618 7.36841 24.8081V15.2293C7.36841 14.1756 8.2305 13.3135 9.28417 13.3135ZM16.9472 7.56625C18.0009 7.56625 18.863 8.42835 18.863 9.48202V24.8081C18.863 25.8618 18.0009 26.7239 16.9472 26.7239C15.8936 26.7239 15.0315 25.8618 15.0315 24.8081V9.48202C15.0315 8.42835 15.8936 7.56625 16.9472 7.56625ZM24.6103 18.5135C25.664 18.5135 26.526 19.3756 26.526 20.4292V24.8081C26.526 25.8618 25.664 26.7239 24.6103 26.7239C23.5566 26.7239 22.6945 25.8618 22.6945 24.8081V20.4292C22.6945 19.3756 23.5566 18.5135 24.6103 18.5135Z"
        fill="#4318FF"
      />
    </svg>
  );
}