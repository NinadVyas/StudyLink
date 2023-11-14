import { Container } from "/components/container";
import { LockIcon, UsersIcon, ChartIcon, WalletIcon } from "/components/icons";
import styles from "/styles/index.module.scss";
import Link from "next/link";

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
          <Link href='/dsa'>
          <div className={styles.card}>
            <img
              src="/dsa.png"
              alt="Card Image"
              className={styles.cardImage}
            />
          </div>
          </Link>
          <div className={styles.card}>
            <img
              src="os.png"
              alt="Card Image"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card}>
            <img
              src="cn.png"
              alt="Card Image"
              className={styles.cardImage}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
