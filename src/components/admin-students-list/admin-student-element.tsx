import { FC, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import adminstyle from "./admin-students-list.module.css";
import {api} from "../../api/Api";
import {TUser} from "../../types/types";

interface TStudentElement { 
  key: string; 
  student: TUser; 
}

export const StudentElement: FC<TStudentElement> = ( { student } ) => {
  const [cohort, setCohort] = useState( student.cohort );
  const [email, setEmail] = useState(student.email);
  const [localDate, setLocalDate] = useState(0)

  useEffect(() => {
    const date = new Date();
    const showDate = date.getDate() 
        + "" + date.getMonth() 
        + "" + date.getFullYear();
    const numDate = Number(showDate)
    setLocalDate(numDate)
  }, [student]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value, name } = e.target;
    console.log(e.target)
    if (name === "cohort") {
        setCohort( e.target.value );
      }
      api.changeUserData({
        cohort: cohort,
        _id: id,
        updatedAt: localDate,
      }).then((data) => {
        console.log('Пользователь успешно изменен')
      })
      .catch(err => console.log(err));
    
    if (name === "email") {
      setEmail(value);
      api.changeUserData({
        email: email,
        _id: id,
        updatedAt: localDate,
      }).then((data) => {
        console.log('Пользователь успешно изменен')
      })
      .catch(err => console.log(err));
    }
  }


  return (

      <li className={adminstyle.list_item} key={student._id}>
        <input 
          className={adminstyle.input}
          type="text"
          value={cohort}
          name="cohort"
          placeholder={student.cohort}
          onChange={e => handleChange(e, student._id)}/>
        <input 
          className={adminstyle.input}
          type="email"
          value={email}
          name="email"
          placeholder={student.email}
          onChange={e => handleChange(e, student._id)}/>
        <Link className={adminstyle.list_item_text} to={`/detail/${student._id}`}>{student.name}</Link>
                
      </li>         
  );
};
