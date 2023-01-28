import { FC, useState, useEffect, ChangeEvent, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header-link.module.css'
import { useForm } from '../../hooks/use-form';
import { api } from '../../api/Api';


interface IHeaderLink {
  user: {
    email: string,
    cohort: string,
    _id: string,
    name: string,
    photo: string,
    tag: 'student' | 'curator',
  },
  style: {
    display:string
  }
}

export const HeaderLink = forwardRef<HTMLLIElement,IHeaderLink> (({user, style} , ref) => {
 

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
  }

  return (
        <div className={styles.container} style={style}>
          <div className={styles.userContainer}>
            <img className={styles.userIcon} src={user.photo} alt={user.name}></img>
            <p className={styles.userName}>{user.name}</p>
          </div>
          <NavLink to='/form' className={styles.link}>
            Профиль
          </NavLink>
        </div>
  );
})