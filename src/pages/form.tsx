import { FC, useState } from "react";
import { Select } from "../ui/select/select";
import {InputDate} from '../ui/widget-date/input-date'
import styles from "./form.module.css";

export const FormPage = () => {
  const [citySelected, setCitySeleted] = useState("Москва");

  const readOnly = () => null;
  return (
    <form className={styles.form}>
      <fieldset>
        <legend>
          Загрузите фото *<span>(размер не менее 440х440 пикселей)</span>
        </legend>
        <label htmlFor="avatar" className={styles.customInputAvatart}>
          <span className={styles.avatarSpan}></span>
        </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          className={styles.hideInput}
        />
      </fieldset>
      <fieldset>
        <label>Дата рождения *</label>
        <InputDate/>
      </fieldset>
      <fieldset>
        <label>Выберите город *</label>
        <Select setCitySeleted={setCitySeleted} citySelected={citySelected} />
      </fieldset>
      <fieldset>
        <label>Ник в телеграм</label>
        <input type="text" />
      </fieldset>
      <fieldset>
        <label>Ник на гитхабе</label>
        <input type="text" />
      </fieldset>
      <fieldset>
        <label>Выберите шаблон</label>
        <select name="template">
          <option value="серьезный">серьезный</option>
          <option value="дерзкий">дерзкий</option>
          <option value="романтичный">романтичный</option>
        </select>
      </fieldset>
      <fieldset>
        <label>Девиз, цитата</label>
        <textarea
          name="citations"
          placeholder="Не более 100 символов"
        ></textarea>
      </fieldset>
      <fieldset>
        <label>Увлечения, досуг, интересы</label>
        <input type="file" name="about-file-intersting" />
        <p>Рекомендуемый размер фото 230х129</p>
        <textarea
          name="about-text-intersing"
          placeholder="Не более 300 символов"
        ></textarea>
      </fieldset>
      <fieldset>
        <label>Семья, статус, домашние животные</label>
        <input type="file" name="about-file-family" />
        <p>Рекомендуемый размер фото 230х129</p>
        <textarea
          name="about-text-intersting"
          placeholder="Не более 300 символов"
        ></textarea>
      </fieldset>
      <fieldset>
        <label>Из какой сферы пришёл? Кем работаешь?</label>
        <textarea
          name="work-before"
          placeholder="Не более 300 символов"
        ></textarea>
      </fieldset>
      <fieldset>
        <label>Почему решил учиться на веб-разработчика?</label>
        <textarea
          name="work-before"
          placeholder="Не более 300 символов"
        ></textarea>
      </fieldset>
      <p>Поля, отмеченные звездочкой, обязательны для заполнения</p>
      <button type="submit">Сохранить</button>
    </form>
  );
};
