import { type } from "@testing-library/user-event/dist/type";
import { FC, useState, useEffect, ReactElement } from "react";

type InputDateType = {
  value: string;
};

type CellDateType = {
  day: number;
  style: string | null;
};

// const getFullDate = (year: number, month: number) => 32 - new Date(year, month, 32).getDate();

export const InputDate: FC<InputDateType> = ({ value }) => {
  const readOnly = () => null;
  const [month, setMonth] = useState<null | number>(null);
  const [year, setYear] = useState<null | number>(null);
  const [cellDate, setCellDate] = useState<Array<CellDateType>>([]);
  // const [montsEven, setMonthEven] = useState([
  //   "April",
  //   "June",
  //   "September",
  //   "November",
  // ]);
  // const [monthsNotEven, setMonthsNotEven] = useState([
  //   "January",
  //   "March",
  //   "May",
  //   "July",
  //   "August",
  //   "October",
  //   "December",
  // ]);

  const createCalendar = (month: number, year: number) => {
    const date = new Date(year, month);
    let arr: any = [];
    let dateDefore: Date | number = new Date();
    dateDefore.setDate(0);
    dateDefore = dateDefore.getDate();
    let pastDate = dateDefore - getDate(date);

    for (let i = 0; i < getDate(date); i++) {
      // arr.push({
      //   day: ++pastDate,
      //   style: null,
      // });
      pusher(++pastDate, null, arr)

    }

    while (date.getMonth() === month) {
      if ((1 + getDate(date)) % 7 == 6 || getDate(date) % 7 == 6) {
        // arr.push({
        //   day: date.getDate(),
        //   style: "red",
        // });
        pusher(date.getDate(), "red", arr)

      } else {
        // arr.push({
        //   day: date.getDate(),
        //   style: "black",
        // });
        pusher(date.getDate(), "black", arr)

      }
      date.setDate(date.getDate() + 1);
    }

    if (getDate(date) != 0) {
      let dayFuture = 0;
      for (let i = getDate(date); i < 7; i++) {
        // arr.push({
        //   day: ++dayFuture,
        //   style: null,
        // });
        pusher(++dayFuture, null, arr)
      }
    }
    setCellDate(arr);
  };

  const pusher = (date: number, selector: string | null = null, arr: Array<CellDateType>) => {
    arr.push({
      day: date,
      style: selector,
    });
  };

  const getDate = (date: Date) => {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  };

  useEffect(() => {
    const date = new Date();

    setMonth(date.getMonth());
    setYear(date.getFullYear());
    createCalendar(date.getMonth(), date.getFullYear());
  }, []);

  useEffect(() => {
    console.log(cellDate);
  }, [cellDate]);

  return (
    <>
      <input type="date" name="date" value={value} onChange={readOnly} />
    </>
  );
};
