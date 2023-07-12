import styles from "./page.module.css";

import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <h1 className={styles[`sr-only`]}>
          Jacob Hildebrandt - Frontend Developer
        </h1>
      </header>
      <main className={styles.main}>
        <Profile />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
