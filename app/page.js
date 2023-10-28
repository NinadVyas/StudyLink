import { Container } from "../components/container";
import { RightArrowIcon } from "../components/icons";
import styles from "../styles/index.module.scss";
import Link from "next/link";

const Index = () => {

  return (
    <Container>
      <main className={styles.main}>
        <div className={styles.product}>
          <div className={styles.news}>
            <a href="https://t.me/+xGtegoUA50dkN2Fl" target="_blank" rel="noreferrer">

              Join our telegram communinty for updates
              <RightArrowIcon />
            </a>
          </div>
          <h1>Your Source for Learning And Building Skills! ⚡</h1>
          <span>
          Fueling your passion for knowledge and creativity with project-based learning and personalized course recommendations.
          </span>
          <div className={styles.heading_buttons}>
            <Link
              href="/resource"
            >
              <button>
                Find Sources{" "}
                <RightArrowIcon />
              </button>
            </Link>

            <Link
              href="/resource"
            >
              <button className={styles.buttonin}>
                Find Sources{" "}
                <RightArrowIcon />
              </button>
            </Link>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Index;
