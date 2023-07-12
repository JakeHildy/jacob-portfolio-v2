import Image from "next/image";
import styles from "../page.module.css";
import Card from "@common/Card";

const Profile = () => {
  return (
    <section>
      <h2>Profile</h2>
      <Card>
        <div className={styles.flex}>
          <Image
            src="/jake.png"
            width={96}
            height={96}
            alt="Jacob Hildebrandt profile image."
          />
          <div className={styles[`profile--wrapper`]}>
            <div className={styles.profile}>
              <h3>Jacob Hildebrandt</h3>
              <p>Senior Frontend Developer</p>
            </div>
            <div className={styles[`profile--links`]}>
              <a
                href="https://github.com/JakeHildy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/jacob-hildebrandt-web-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:jacob.hildebrandt@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Profile;
