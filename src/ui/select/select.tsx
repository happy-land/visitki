import { FC, BaseSyntheticEvent, SetStateAction, Dispatch } from "react";
import styles from "./select.module.css";
import caretSvg from "../form-icons/caret-down.svg";

type SelectType = {
  citySelected: string;
  setCitySeleted: Dispatch<SetStateAction<string>>;
};

export const Select: FC<SelectType> = ({ citySelected, setCitySeleted }) => {
  const readOnly = () => null;

  const optionArr = ["Чебаксары", "Москва", "Санкт-Петербург"];
  
  const handleClick = (e: BaseSyntheticEvent) => {
    const baseElem = e.currentTarget;
    const currentElem = e.target;
    const ulElem = baseElem.querySelector("." + styles.ul);
    const image = baseElem
      .querySelector("." + styles.titleSelect)
      .querySelector("." + styles.imgCaret);

    ulElem.classList.add(styles.ulActive);
    image.classList.add(styles.imgCaretActive);

    if (currentElem.closest("ul")) {
      setCitySeleted(currentElem.textContent);
      ulElem.classList.remove(styles.ulActive);
      image.classList.remove(styles.imgCaretActive);
    }
  };

  return (
    <>
      <div onClick={handleClick} className={styles.conteiner}>
        <div className={styles.titleSelect}>
          {citySelected}{" "}
          <img
            className={styles.imgCaret}
            src={caretSvg}
            alt="иконка стрека вниз список"
          />
        </div>
        <ul className={styles.ul}>
          {optionArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <select
        name="cites"
        id="#"
        value={citySelected}
        onChange={readOnly}
        className={styles.selectOriginal}
      >
        {optionArr.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
