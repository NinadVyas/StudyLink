import { Container } from "/components/container";
import { LockIcon, UsersIcon, ChartIcon, WalletIcon } from "/components/icons";
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
