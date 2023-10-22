import { Container } from "../components/container";
import { RightArrowIcon } from "../components/icons";
import styles from "../styles/index.module.scss";

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
            <a
              href="https://play.google.com/store/apps/details?id=com.ivy.wallet&hl=en&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Find Sources{" "}
                <RightArrowIcon />
              </button>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.ivy.wallet&hl=en&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.buttonin}>
                Find Sources{" "}
                <RightArrowIcon />
              </button>
            </a>
          </div>
        </div>
      </main>

      {/* <div className={styles.about}>
        <div className={styles.heading}>
          <div>Why Ivy Wallet?</div>
          <div>
            Discover, explore and visualize data to maximize your growth.
          </div>
        </div>
        <p></p>
        <div className={styles.perks_container}>
          {perks.map((e) => (
            <div key={e.heading} className={styles.perk}>
              <div>{e.icon}</div>
              <div>{e.heading}</div>
              <div>{e.paragraph}</div>
            </div>
          ))}
        </div>
      </div> */}
    </Container>
  );
}

export default Index;
