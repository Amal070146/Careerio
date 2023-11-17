import styles from "./FormPostGig.module.css";

export const FormPostGigs = () => {
const data = ["Python", "React", "Django","Flask","Node","Express"];
  return (
    <div className={styles.FormPostWrapper}>
      <h1>Post a Gig</h1>
      <div>
        <div>
          <div>
            <div>
              <p>Title</p>
              <input type="text" placeholder="UI/UX Designer" />
            </div>
            <div>
              <p>Company Name</p>
              <input type="text" placeholder="FAYA" />
            </div>
          </div>
          <div>
            <div>
              <p>Description</p>
              <textarea name="" id=""></textarea>
            </div>
            <div>
              <div>
                <p>Budget(Approx*)</p>
                <input type="text" placeholder="20,000 Rs" />
              </div>
              <div>
                <p>Expected Duration</p>
                <input type="text" placeholder="2 Weeks" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Skill Required</p>
          {data.map((skill, index) => (
            <button key={index}>{skill}</button>
          ))}
        </div>
      </div>
      <div>
        <button>Post Gig</button>
        <button>Clear all</button>
      </div>
    </div>
  );
};
