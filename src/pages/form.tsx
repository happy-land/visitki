import { FC, useState, BaseSyntheticEvent, useRef, ChangeEvent } from "react";
import { Select } from "../ui/select/select";
import { InputDate } from "../ui/widget-date/input-date";
import styles from "./form.module.css";
import { InputFile } from "../ui/input-file/input-file";
import { Button } from "../ui/button/button"

const visibleError = (input: HTMLInputElement, boolean= false) => {
  const parent:any = input.parentNode
  const error = parent.querySelector('#error');
  error.classList.add(styles.errorVisible) 
  if (boolean) {
    error.classList.remove(styles.errorVisible)
  }
}

export const FormPage = () => {
  const [citySelected, setCitySeleted] = useState("Москва");
  const [optionCityArr, setOptionArr] = useState([
    "Чебаксары",
    "Москва",
    "Санкт-Петербург",
    "Омск",
    "Омск",
  ]);
  const [templateArr, setTemplateArr] = useState([
    "серьезный",
    "дерзкий",
    "романтичный",
  ]);
  const [templateSelected, setTemplateSelected] = useState("серьезный");
  const avatar = useRef<any>(null)

  const hadleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    const inputs = [...e.target.querySelectorAll('input')]
    const formData = new FormData(e.target)
    console.log(inputs[1])

    inputs.forEach((element: HTMLInputElement) => {
      if ( element.name == 'avatar' ) {
        if (element.files?.length == 0) {
          visibleError(element);
        } else {
          visibleError(element, true);
        }
      }

      if (element.name == 'date') {
        if (element.value) {
          visibleError(element, true);
        } else {
          visibleError(element);
        }
      }
    });
  }

  const handleChangeAvatr = (e: any) => {
    const avatarContainer = avatar.current;
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader> ) {
      if (avatarContainer) {
        avatarContainer.style.backgroundImage = `url(${e?.target?.result})`;
        avatarContainer.style.backgroundSize = 'cover';
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log('event=')
  }

  return (
    <form className={styles.form} onSubmit={hadleSubmit}>
      <fieldset>
        <legend className={styles.legendFile} >
          Загрузите фото *<span>(размер не менее 440х440 пикселей)</span>
        </legend>
        <label htmlFor="avatar" className={styles.customInputAvatart} ref={avatar}>
          <span className={styles.avatarSpan}></span>
        </label>
        <span id='error' className={styles.error}>Нет файла</span>
        <input
          type="file"
          id="avatar"
          name="avatar"
          className={styles.hideInput}
          onChange={handleChangeAvatr}
        />
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Дата рождения *</label>
        <InputDate />
        <span id='error' className={styles.error}>Поле обязательно для заполнения</span>

      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Выберите город *</label>
        <Select
          setPayloadSeleted={setCitySeleted}
          payload={citySelected}
          optionArr={optionCityArr}
          name='cites'
        />
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Ник в телеграм</label>
        <input type="text" name="telegram"/>
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Ник на гитхабе</label>
        <input type="text" name="github"/>
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Выберите шаблон</label>
        <Select
          setPayloadSeleted={setTemplateSelected}
          payload={templateSelected}
          optionArr={templateArr}
          name='template'
        />
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Девиз, цитата</label>
        <textarea
          name="citations"
          placeholder="Не более 100 символов"
          className={styles.textAria}
        ></textarea>
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Увлечения, досуг, интересы</label>
        <InputFile id="intersting" name="intersting" />
        <label className={styles.labelMarginFourTen}>Рекомендуемый размер фото 230х129</label>
        <textarea
          name="about-text-intersing"
          placeholder="Не более 300 символов"
          className={styles.textAria}
        ></textarea>
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Семья, статус, домашние животные</label>
        <InputFile id="family" name="family" />
        <label className={styles.labelMarginFourTen}>Рекомендуемый размер фото 230х129</label>
        <textarea
          name="about-text-intersting"
          placeholder="Не более 300 символов"
          className={styles.textAria}
        ></textarea>
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Из какой сферы пришёл? Кем работаешь?</label>
        <textarea
          name="work-before"
          placeholder="Не более 300 символов"
          className={styles.textAria}
        ></textarea>
      </fieldset>
      <fieldset>
        <label className={styles.labelMarginFourButon}>Почему решил учиться на веб-разработчика?</label>
        <textarea
          name="work-before"
          placeholder="Не более 300 символов"
          className={styles.textAria}
        ></textarea>
      </fieldset>
      <fieldset>
        <p>Поля, отмеченные звездочкой, обязательны для заполнения</p>
        <button type="submit" className={styles.button}>Сохранить</button>
        {/* <Button variant="" handleClick={()=> {}} type='submite'>Сохранить</Button> */}
      </fieldset>
    </form>
  );
};
