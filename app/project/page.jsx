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
        </div>
        </div>
      </div>
    </Container>
  );
}
