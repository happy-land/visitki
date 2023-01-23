import { FC, useState } from "react";
import styles from "./AdminPage.module.css";
import { AdminCommentsList } from "../../components/admin-comments-list/admin-comments-list";
import { AdminStudentsList } from "../../components/admin-students-list/admin-students-list";

export const AdminPage: FC = () => {
  let [category, setCategory] = useState("students");

  const setStudentsList = () => {
    setCategory((category = "students"));
  };

  const setCommentsList = () => {
    setCategory((category = "comments"));
  };
  return (
    <section className={styles.page}>
      <>
        <nav className={styles.button_wrapper}>
          <button
            className={`${styles.button} ${
              category === "students" && styles.active
            }`}
            onClick={setStudentsList}
          >
            СТУДЕНТЫ
          </button>
          <button
            className={`${styles.button} ${
              category === "comments" && styles.active
            }`}
            onClick={setCommentsList}
          >
            КОММЕНТАРИИ
          </button>
        </nav>
        {category === "students" ? <AdminStudentsList /> : <AdminCommentsList />}
      </>
    </section>
  );
};
