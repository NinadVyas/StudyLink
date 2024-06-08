import { Container } from "../components/container";
import { RightArrowIcon } from "../components/icons";
import styles from "../styles/index.module.scss";
import Link from "next/link";

const Index = () => {

  return (
    <Container>
      <main className={styles.main}>
        <div className={styles.product}>
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className=" cursor-wait relative rounded-full flex border border-sky-500 px-3 py-1 text-sm leading-6 text-gray-300">
          Want to share your Notes <Link href="https://github.com/ninadvyas/better-bridges" className="font-semibold flex ml-2 text-yellow-500">Click Here ➤</Link>
        </div>
      </div>
          <h1>Your Source for Learning And Building Skills!</h1>
          <span>
          Fueling your passion for knowledge and creativity with project-based learning and personalized course recommendations.
          </span>
          {/* <div className={styles.heading_buttons}>
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
          </div> */}
        </div>
      </main>
    </Container>
  );
}

export default Index;
