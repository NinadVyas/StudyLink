import { Container } from "/components/container";
import { LockIcon, UsersIcon, ChartIcon, WalletIcon } from "/components/icons";
import styles from "/styles/index.module.scss";

export default function Course() {


  return (
    <Container title="Resource">
      <div className={styles.about}>
        <div className={styles.heading}>
          <div>FAQ</div>
          <div>
            Explore, Learn, Create, Innovate
          </div>
        </div>
      </div>
    </Container>
  );
}
