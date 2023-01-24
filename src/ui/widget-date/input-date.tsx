import { type } from "@testing-library/user-event/dist/type";
import {
  FC,
  BaseSyntheticEvent,
  useState,
  useEffect,
  useCallback,
  ReactElement,
} from "react";
import styles from "./input-date.module.css";
import caledarIcon from "../form-icons/calendar-icon.svg";

// type InputDateType = {
//   value: string;
// };

type CellDateType = {
  day: number;
  style: string;
  active: string;
};

// const getFullDate = (year: number, month: number) => 32 - new Date(year, month, 32).getDate();
const addZero = (num:number) => num < 10 ? "0" + String(num): String(num);

export const InputDate = () => {
  const readOnly = () => null;
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [daySelect, setDaySelect] = useState(1);
  const [cellDate, setCellDate] = useState<Array<CellDateType>>([]);
  const [listYears, setListYears] = useState<Array<number>>([]);
  const [fullFrontDate, setFullFrontDate ] = useState('')
  const [value, setValue] = useState('');
  const [calendarReducer, setCaledarReducer] = useState(false);
  const [months, setMonths] = useState([
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]);
  
  const createCalendar = (month: number, year: number) => {
    const date = new Date(year, month);
    let arr: any = [];
    let dateDefore: Date | number = new Date();
    dateDefore.setDate(0);
    dateDefore = dateDefore.getDate();
    let pastDate = dateDefore - getDate(date);

    for (let i = 0; i < getDate(date); i++) {
      if ((1 + i) % 7 == 6 || i % 7 == 6) {
        pusher(++pastDate, "pink", arr);
      } else {
        pusher(++pastDate, "black", arr);
      }
    }

    while (date.getMonth() === month) {
      if ((1 + getDate(date)) % 7 == 6 || getDate(date) % 7 == 6) {
        pusher(date.getDate(), "pink", arr);
      } else {
        pusher(date.getDate(), "grey", arr);
      }
      date.setDate(date.getDate() + 1);
    }

    if (getDate(date) != 0) {
      let dayFuture = 0;
      for (let i = getDate(date); i < 7; i++) {
        if ((1 + i) % 7 == 6 || i % 7 == 6) {
          pusher(++dayFuture, "pink", arr);
        } else {
          pusher(++dayFuture, "black", arr);
        }
      }
    }
    setCellDate(arr);
  };

  const pusher = (
    date: number,
    selector: string,
    arr: Array<CellDateType>,
    active: string = ""
  ) => {
    arr.push({
      day: date,
      style: selector,
      active,
    });
  };

  const getDate = (date: Date) => {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  };

  const clickPad = (e: any) => {
    setCaledarReducer(false)
  }

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    let arrYears = [];
    setMonth(month);
    setYear(year);
    for (let i = 1917; i <= year; i++) {
      arrYears.push(i);
    }

    setListYears(arrYears.reverse());

    createCalendar(month, year);

    document.addEventListener('click', clickPad)

    return () => document.removeEventListener('click', clickPad)
  }, []);

  const handleCaledareClick = (e: BaseSyntheticEvent) => {
    e.stopPropagation();

    if (e.target.nodeName === 'LI') {
    const dayIndex = parseInt(e.target.dataset.index);
    const day = parseInt(e.target.textContent);
    setDaySelect(day);
    const originalMonth = month + 1;
    const fullDate = String(year) + "." + addZero(originalMonth) + "." + addZero(day);
    const arr = cellDate.map((item, index) => {
      if (index == dayIndex) {
        return {
          ...item,
          active: "active",
        };
      } else
        return {
          ...item,
          active: "",
        };
    });

    const fulDateReverse = fullDate.split('.').reverse().join('.')
    const value = fullDate.split('.').join('-');

    setValue(value);
    setFullFrontDate(fulDateReverse)
    setCellDate(arr);
    }

  };

  return (
    <>
      <div className={styles.wraper}>
        <div className={styles.inputCustom} onClick={(e: BaseSyntheticEvent) => {
          e.stopPropagation();
          e.target.classList.contains(styles.inputCustom) && setCaledarReducer(true)
          }}>
          {fullFrontDate}
          <img
            className={styles.caledarIcon}
            src={caledarIcon}
            alt="иконка календаря"
          />
        </div>
        <div onClick={handleCaledareClick} className={`${styles.caledarContainer} ${calendarReducer && styles.caledarContainerActive}`}>
          <div>
            <select
              className={`${styles.select} ${styles.selectYear}`}
              name="year"
              value={String(year)}
              onChange={(e: BaseSyntheticEvent) => {
                const value = parseInt(e.target.value);
                setYear(value);
                createCalendar(month, value)
              }}
            >
              {listYears.map((item, index) => (
                <option value={String(item)} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <select
              name="month"
              value={String(month)}
              className={`${styles.select} ${styles.selectMonth}`}
              onChange={(e:BaseSyntheticEvent) => {
                const value = parseInt(e.target.value);
                setMonth(value);
                createCalendar(value, year)
              }}
            >
              {months.map((item, index) => (
                <option value={index} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <ul  className={styles.caledar}>
            {cellDate.map((item, index) => (
              <li
                key={index}
                data-index={index}
                className={`${styles.caledarLi} ${styles[item.style]} ${
                  item.active ? styles[item.active] : ""
                }`}
              >
                {item.day}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <input
        className={styles.inputOriginal}
        type="date"
        name="date"
        value={value}
        onChange={readOnly}
      />
    </>
  );
};
