"use client";
import * as excalidrawLib from "@excalidraw/excalidraw";
import { Excalidraw } from "@excalidraw/excalidraw";
import styles from "./styles/index.module.scss";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div style={{ height: "500px", width: "1000px" }} >
      <Excalidraw theme="dark" />
    </div>
  );
};

export default ExcalidrawWrapper;