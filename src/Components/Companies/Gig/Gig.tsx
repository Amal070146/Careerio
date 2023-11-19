import styles from "./Gig.module.css";

const Gig = () => {
  return (
    <div className={styles.GigWrapper}>
      <div className={styles.HeaderWrapper}>
        <div>
          <img src="" alt="logo" />
          <div>
            <h2>UI/UX Designer</h2>
            <p>Posted by EY</p>
          </div>
        </div>
        <div>
          <p>Expected Duration</p>
          <p>2 Weeks</p>
        </div>
        <div>
          <p>Upto</p>
          <h2>20K</h2>
          <p>INR</p>
        </div>
      </div>
      <div>
        <p>
          We are seeking a talented UI/UX Designer to join our team and help
          create exceptional user experiences. In this role, you will be
          responsible for designing and enhancing user interfaces for our
          digital products. You will collaborate closely with cross-functional
          teams to translate user needs into visually appealing and intuitive
          designs.
        </p>
        <div>
          <h3>Key Responsibilities:</h3>
          <ol>
            <li>
              Conduct user research to understand user behaviors, needs, and
              preferences.{" "}
            </li>
            <li>
              Create wireframes, prototypes, and user flows to conceptualize and
              communicate design ideas.
            </li>{" "}
            <li>
              Design visually stunning and user-friendly interfaces for web and
              mobile applications.
            </li>
            <li>
              {" "}
              Collaborate with developers to ensure seamless implementation of
              designs.
            </li>
            <li>
              {" "}
              Conduct usability testing and gather feedback to iterate and
              improve designs.
            </li>{" "}
            <li>
              Stay up-to-date with industry trends and best practices in UI/UX
              design.
            </li>
            <li>
              {" "}
              Work closely with product managers and stakeholders to align
              design solutions with business goals.
            </li>
            <li>
              {" "}
              Maintain design consistency and contribute to design guidelines.
            </li>
          </ol>
        </div>
        <div>
          <h3>Qualifications:</h3>
          <ol>
            <li>
              Bachelor's degree in UI/UX design, graphic design, or a related
              field.
            </li>
            <li>
              {" "}
              Proven experience as a UI/UX Designer with a strong portfolio
              showcasing previous work.{" "}
            </li>
            <li>
              Proficiency in design tools such as Adobe XD, Figma, Sketch, or
              similar.
            </li>
            <li> Strong understanding of user-centered design principles.</li>
            <li>
              Excellent communication and collaboration skills. Problem-solving
              mindset and attention to detail.
            </li>{" "}
            <li>
              {" "}
              Familiarity with HTML, CSS, and front-end development is a plus.
            </li>
          </ol>
        </div>
        <p>
          Join our dynamic team and play a crucial role in shaping the user
          experiences of our digital products. If you're passionate about
          creating intuitive and visually appealing designs, we'd love to hear
          from you. Apply now to embark on an exciting UI/UX design journey with
          us!
        </p>
      </div>
      <div>
        <h2>Top skills required</h2>
        <div>
          <p>Python</p>
          <p>MongoDB</p>
          <p>ReactJS</p>
          <p>Django</p>
        </div>
      </div>
    </div>
  );
};

export default Gig;
