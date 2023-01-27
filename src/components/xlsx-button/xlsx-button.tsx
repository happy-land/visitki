import { read, writeFileXLSX, utils } from "xlsx";
import { FC, BaseSyntheticEvent, Dispatch, SetStateAction } from "react";
import styles from "./xlsx-button.module.css";

type TxlsmButton = {
  setXlsm: Dispatch<SetStateAction<Array<Object>>>   
}

export const XlsmButton: FC<TxlsmButton> = ({setXlsm}) => {

  const handleChange = async (e: BaseSyntheticEvent) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const wb = read(data);

    setXlsm(utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]))
  };

  return (
    <>
      <label htmlFor="xlsx" className={styles.button}>Выберите файл</label>
      <input type="file" id="xlsx" onChange={handleChange} className={styles.hidden} />
    </>
  );
};
