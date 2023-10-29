import { Container } from "/components/container";
import styles from "/styles/index.module.scss";

export default function Dashboard() {


  return (
    <Container title="Resource">
      <div className={styles.about}>
        <div className={styles.heading}>
          <div>Dashboard</div>
          <div>
            Main Dashboard
          </div>
          <div className={styles.maincards}>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
              className={styles.cardImage}
            />
          </div>
        </div>
        </div>
      </div>
    </Container>
  );
}
