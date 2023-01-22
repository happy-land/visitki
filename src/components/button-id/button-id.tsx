import styles from "./button-id.module.css";

export const ButtonId = () => {
  return (
    <a
      href="https://oauth.yandex.ru/authorize?response_type=token&client_id=6c35df8e2c51463782163dab89f6874d"
      className={styles.button}
    >
      Войти с Яндекс ID
    </a>
  );
};
