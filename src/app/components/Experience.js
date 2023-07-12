import styles from "../page.module.css";
import Card from "@common/Card";

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <Card>
        <h3>Commerce7 - Senior Frontend Developer</h3>
        <p>Vancouver, BC (Remote)</p>
        <p>January 2023 - Present</p>
      </Card>
      <Card>
        <h3>Commerce7 - Frontend Developer</h3>
        <p>Vancouver, BC (Remote)</p>
        <p>August 2021 - December 2022</p>
      </Card>
      <Card>
        <h3>BrainStation - Teaching Assistant</h3>
        <p>Vancouver, BC (Remote)</p>
        <p>May 2021 - August 2021</p>
      </Card>
      <Card>
        <h3>ESC Automation - Application Engineer</h3>
        <p>Vancouver, BC</p>
        <p>June 2016 - February 2021</p>
      </Card>
    </section>
  );
};

export default Experience;
