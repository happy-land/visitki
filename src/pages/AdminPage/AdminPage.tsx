import {FC, useState} from 'react';
import styles from './AdminPage.module.css';
import {AdminCommentsList} from '../../components/admin-comments-list/admin-comments-list'
import {AdminStudentsList} from '../../components/admin-students-list/admin-students-list'

export const AdminPage:FC =() =>{

    let [isUsers, setChange] = useState("students");

  const setUsers = () => {
    setChange((isUsers = "students"));
  };

  const setComments = () => {
    setChange((isUsers = "comments"));
  };
    return(
        <section className={styles.page}>
<>
      <nav className={styles.button_wrapper}>
        <button
          className={`${styles.button} ${
            isUsers === "students" && styles.active
          }`}
          onClick={setUsers}
        >
          СТУДЕНТЫ
        </button>
        <button
          className={`${styles.button} ${
            isUsers === "comments" && styles.active
          }`}
          onClick={setComments}
        >
          КОММЕНТАРИИ
        </button>
      </nav>
      {isUsers === "students" ? <AdminStudentsList /> : <AdminCommentsList />}
    </>
        </section>
    )
}