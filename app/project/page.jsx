import { Container } from "/components/container";
import styles from "/styles/index.module.scss";

export default function Dashboard() {


  return (
    <Container title="Resource">
      <div className={styles.about}>
        <div className={styles.heading}>
          <div>Projects</div>
        </div>
      </div>
    </Container>
  );
}
