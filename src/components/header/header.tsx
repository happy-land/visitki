import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../ui/logo/logo';
import styles from './header.module.css';


export const Header: FC = () => {
  let user: any
  const _user = localStorage.getItem("user")
	if (_user) {
		user = JSON.parse(_user)
	}
  return (
    <header className={styles.header}>
      <NavLink to='/' className={styles.logoContainer}>
        <Logo />
      </NavLink>
      {user?  ( 
        (user.tag ==='student' 
        ?
        (<NavLink to='/form' className={styles.userContainer}>
          <img className={styles.userIcon} src={user.photo} alt={user.name}></img>
          <p className={styles.userName}>{user.name}</p>
        </NavLink>)
        : 
        (<NavLink to='/admin' className={styles.userContainer}>
          <img className={styles.userIcon} src={user.photo} alt={user.name}></img>
          <p className={styles.userName}>{user.name}</p>
        </NavLink>))
      ) : null}
    </header>
  );
};

//export const Header: FC = () => {
//  return (
//    <header className={styles.header}>
//      <NavLink to='/' className={styles.logoContainer}>
//        <Logo />
//      </NavLink>
//       
//       <NavLink to='/profile' className={styles.userContainer}>
//        <img className={styles.userIcon} alt="Фотография пользователя"></img>
//          <p className={styles.userName}>Константин Константинопольский</p>
//        </NavLink>
//    </header>
//  );
//};


