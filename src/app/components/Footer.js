import styles from "../page.module.css";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.footer__links}>
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
      <p>&copy; {currentYear} Jacob Hildebrandt</p>
    </div>
  );
};

export default Footer;
