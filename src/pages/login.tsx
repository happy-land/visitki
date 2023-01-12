import { FC } from "react";
import { ButtonId } from "../components/button-id/button-id";
import styles from "./login.module.css";


export const LoginPage: FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>С кем я учусь?</h1>
      <ButtonId />
    </main>
  );
};
