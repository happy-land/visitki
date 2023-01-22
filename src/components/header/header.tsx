import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../ui/logo/logo';
import styles from './header.module.css';

//type THeader = {
//  user: TUser;
//};

//export const Header: FC<THeader> = ({user}) => {
//  return (
//    <header className={styles.header}>
//      <NavLink to='/' className={styles.logoContainer}>
//        <Logo />
//      </NavLink>
//      {user ? 
//       (<NavLink to='/' className={styles.userContainer}>
//          <img className={styles.userIcon} src={user.photo} alt={user.photo}></img>
//          <p className={styles.userName}>{user.name}</p>
//        </NavLink>) : null}
//    </header>
//  );
//};
export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <NavLink to='/' className={styles.logoContainer}>
        <Logo />
      </NavLink>
       
       <NavLink to='/profile' className={styles.userContainer}>
        <img className={styles.userIcon} alt="Фотография пользователя"></img>
          <p className={styles.userName}>Константин Константинопольский</p>
        </NavLink>
    </header>
  );
};


