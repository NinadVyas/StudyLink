import { Container } from "/components/container";
import { LockIcon, UsersIcon, ChartIcon, WalletIcon } from "/components/icons";
import styles from "/styles/index.module.scss";

export default function Resource() {


  return (
    <Container title="Resource">
      <div className={styles.about}>
        <div className={styles.heading}>
          <div>Documents</div>
          <div>
            Explore, Learn, Create, Innovate
          </div>

        </div>
        <div className={styles.maincards}>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
              className={styles.cardImage}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
