import { FC, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import adminstyle from "./admin-students-list.module.css";
import {api} from "../../api/Api";
import {TUser} from "../../types/types";
import deleteIcon from "../../assets/images/trash-can.svg";
import { StudentElement } from "./admin-student-element";

import { ReactComponent as Loader } from '../../assets/images/Loader.svg';



export const AdminStudentsList: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [students, setStudents] = useState<TUser[]>([]);
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    setLoading(true);
    api.getUsersData().then((data) => {
      const students = data.items.sort((a, b) => (a.createdAt - b.createdAt)) 
      setStudents(students);
      setLoading(false);
    })
    .catch(err => console.log(err));
  }, []);

  const sortingCohort = () => {
    if(order === "ASC") {
      const sorted = [...students].sort((a, b)=>
      a.cohort.toLowerCase() > b.cohort.toLowerCase() ? 1 : -1)
      setStudents(sorted);
      setOrder("DSC")
    } else {
      const sorted = [...students].sort((a, b)=>
      a.cohort.toLowerCase() < b.cohort.toLowerCase() ? 1 : -1)
      setStudents(sorted);
      setOrder("ASC")
    }
  }

  const sortingEmail = () => {
    if(order === "ASC") {
      const sorted = [...students].sort((a, b)=>
      a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1)
      setStudents(sorted);
      setOrder("DSC")
    } else {
      const sorted = [...students].sort((a, b)=>
      a.email.toLowerCase() < b.email.toLowerCase() ? 1 : -1)
      setStudents(sorted);
      setOrder("ASC")
    }
  }

  const sortingName = () => {
    if(order === "ASC") {
      const sorted = [...students].sort((a, b)=>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
      setStudents(sorted);
      setOrder("DSC")
    } else {
      const sorted = [...students].sort((a, b)=>
      a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
      setStudents(sorted);
      setOrder("ASC")
    }
  }

  return (
    <div className={adminstyle.page_wrapper}>
      {isLoading 
      ? (<div className={adminstyle.loaderContainer}>
          <Loader className={adminstyle.loader}/>
        </div>) 
      : (students?.length 
        ? 
        (<>
          <div className={adminstyle.table}>
            <ul className={adminstyle.list_headings}>
              <li onClick={()=>sortingCohort()}>Номер когорты</li>
              <li onClick={()=>sortingEmail()}>E-mail</li>
              <li onClick={()=>sortingName()}>Имя и фамилия студента</li>
            </ul>
            <div className={adminstyle.list_wrapper}>
              <ul className={adminstyle.list}>
                {students.map((element) => (
                  <StudentElement key={element._id} student={element} />
                ))}
              </ul>
            </div>

          </div>
        </>) 
        : 
        (<div className={`${adminstyle.list_wrapper} ${adminstyle.notfound}`} >
          Не удалось никого найти. Исправьте запрос или сбросьте фильтр
        </div>)
      )}
    </div>
  );
};
