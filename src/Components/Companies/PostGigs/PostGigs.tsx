import { Link, useNavigate } from "react-router-dom";
import styles from "./PostGigs.module.css";
import { useEffect, useState } from "react";
import image from "./assets/ey.png";
import { DrumsIcon} from "./utils/commom";
import { getGigs } from "./PostGigApis";

export const PostGigs = () => {
	const navigate = useNavigate()

    const [data, setData] = useState<GigData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getGigs();
            setData(result);
        };

        fetchData();
    }, []);

	function formatNumber(num: number) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "k"; // toFixed(1) ensures one decimal place
        }
        return num.toString(); // return the number as a string if it's less than 1000
    }
	
    return (
        <>
            {/* {data.length === 0 ? (
                <div className={styles.PostGigWrapper}>
                    <div className={styles.InnerConatiner}>
                        <DrumsIcon colors="#4318FF" width={50} height={50} />

                        <div className={styles.contentWrapper}>
                            <h1>Get started with Gigs</h1>
                            <p>
                                {" "}
                                Let's work together to build gig<br></br>{" "}
                                workforce efficiently.
                            </p>
                        </div>
                        <Link to="/formpostgig">Post a Gig!</Link>
                    </div>
                </div>
            ) : ( */}
            <div className={styles.PostGigWorkWrapper}>
                <div className={styles.HeaderSection2}>
                    <div>
                        {" "}
                        <DrumsIcon colors="#fff" width={150} height={150} />
                    </div>
                    <div className={styles.ContentSession}>
                        <h1>Get your work done with Gigs!</h1>
                        <p>
                            Are you a company seeking the top talents? Look no
                            further! We are your trusted partner for gig work
                            postings, connecting you with the best freelancers,
                            contractors, and gig workers in the industry.
                            Partner with us today and experience the difference
                            in gig work postings.
                        </p>
                        <Link to="/formpostgig">Post a Gig!</Link>
                    </div>
                </div>
                <div className={styles.AvailableGigsWrapper}>
                    <h1>Currently available gigs</h1>
                    <div className={styles.DataBlockWrapper}>
                        {data.map((gig, index) => (
                            <div
                                className={styles.IndividualWrapper}
                                key={index}
                                onClick={() => {
                                    navigate(`/gig/${gig.id}`);
                                }}
                            >
                                <div className={styles.firstDiv}>
                                    <img src={image} alt="" />
                                    <p>{gig.role}</p>
                                </div>
                                <div className={styles.SecondDiv}>
                                    <h1>{gig.companyname}</h1>
                                    <p>{gig.description}</p>
                                    <div className={styles.StacksWrapper}>
                                        {gig.skills
                                            .split(", ")
                                            .map((stack, stackIndex) => (
                                                <p key={stackIndex}>{stack}</p>
                                            ))}
                                    </div>
                                </div>
                                <div className={styles.ThirdDiv}>
                                    <p>Upto</p>
                                    <h1>{formatNumber(Number(gig.amount))}</h1>
                                    <p>INR</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
};