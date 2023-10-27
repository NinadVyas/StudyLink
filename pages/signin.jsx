import React from 'react'
import { Container } from "../components/container";
import styles from "../styles/index.module.scss";

function signin() {
  return (
    <Container title="Resource">
    <div className={styles.about}>
      <div className={styles.heading}>
        <div>
          Sign IN
        </div>
      </div>
    </div>
  </Container>
  )
}

export default signin

