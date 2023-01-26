import { render } from "@testing-library/react";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import adminstyle from "./admin-students-list.module.css";


interface IStudents {
  cohort: string;
  email: string;
  name: string;
}

export const AdminStudentsList: FC = () => {
  const [students, setStudents] = useState<IStudents[]>([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setStudents([...response.data.items]);
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, []);

  return (
    <div className={adminstyle.page_wrapper}>
      <ul className={adminstyle.list_headings}>
        <li>Номер когорты</li>
        <li>e-mail</li>
        <li>Имя и фамилия студента</li>
      </ul>
      <div className={adminstyle.list_wrapper}>
        <ul className={adminstyle.list}>
          {students.map((element, index) => (
            <li className={adminstyle.list_item} key={index}>
              <p className={adminstyle.list_item_text}>{element.cohort}</p>
              <p className={adminstyle.list_item_text}>{element.email}</p>
              <p className={adminstyle.list_item_text}>{element.name}</p>
            </li>
          ))} 
        </ul>
      </div>
    </div>
  );
};
