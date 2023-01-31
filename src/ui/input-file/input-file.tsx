import { FC } from "react";
import styles from "./input-file.module.css"
import attach from '../form-icons/attach.svg'
type TypeInputFile = {
  id: string;
  name: string;
};

export const InputFile: FC<TypeInputFile> = ({ id, name }) => {
  return (
    <>
      <label className={styles.customInput} htmlFor={id}>
        <img className={styles.img} src={attach} alt="иконка скрепка" />
      </label>
      <input className={styles.hideInput} type="file" id={id} name={name} />
    </>
  );
};
