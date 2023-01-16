import React, { FC } from "react";
import adminstyle from "./adminstudents.module.css";
{/*import {getStudentsApi} from '../../utils/Api'*/}

export const AdminStudentsList:FC = () => {
  return (
    <div className={adminstyle.page_wrapper}>
      <ul className={adminstyle.list_headings}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={adminstyle.list_wrapper}>
        <ul className={adminstyle.list}>
          {getStudentsApi.map((element, index) => (
            <li className={adminstyle.list_item} key={index}>
              <p className={adminstyle.list_item_text}>{element.team}</p>
              <p className={adminstyle.list_item_text}>{element.email}</p>
              <p className={adminstyle.list_item_text}>{element.fullName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
