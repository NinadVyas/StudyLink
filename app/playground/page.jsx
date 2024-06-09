import { Container } from "/components/container";
import styles from "/styles/index.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";

const ExcalidrawWithClientOnly = dynamic(
  async () => (await import("../../excalidrawWrapper")).default,
  {
    ssr: false,
  },
);

const Playground = () => {

  return (
    <Container title="Resource">
           <div className={styles.heading}>
          <div>Playground</div>
        </div>
        <div className=' flex justify-center' >
        <ExcalidrawWithClientOnly style={{ height: "500px", width: "500px" }} />
        </div>
    </Container>
  );
}

export default Playground;
