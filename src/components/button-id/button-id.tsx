import styles from "./button-id.module.css";
import {Button} from "../../ui/button/button";

export const ButtonId = () => {
  return (
    <Button
      htmlType='button'
      size='large'
    >
      <a
        href="https://oauth.yandex.ru/authorize?response_type=token&client_id=6c35df8e2c51463782163dab89f6874d"
        className={styles.link}
      >
        Войти с Яндекс ID
      </a>
    </Button>

  );
};
