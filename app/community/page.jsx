import { Container } from "/components/container";
import styles from "/styles/index.module.scss";

export default function Course() {


  return (
    <Container title="Resource">
      <div className={styles.about}>
        <div className={styles.heading}>
          <div>Community</div>
          <div>
            Explore, Join, Invote, Create
          </div>
        </div>
      </div>
    </Container>
  );
}
