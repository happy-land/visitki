import { FC, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./AdminPage.module.css";

export const AdminPage: FC = () => {

  const classNameLink = ({isActive}: any) => (isActive ? `${styles.active}` : `${styles.link}`);

  return (
    <section className={styles.page}>
      <>
        <nav className={styles.button_wrapper}>
          <NavLink
            to={'/admin/users'}
            className={classNameLink}
            
          >
            СТУДЕНТЫ
          </NavLink>
          <NavLink
            to={'/admin'}
            className={classNameLink}
            end
          >
            КОММЕНТАРИИ
          </NavLink>
        </nav>
        <Outlet />
      </>
    </section>
  );
};
