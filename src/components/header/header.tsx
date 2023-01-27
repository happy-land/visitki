import { FC, MouseEvent, useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../ui/logo/logo';
import styles from './header.module.css';
import { HeaderLink } from '../header-link/header-link';
import { useOnClickOutside } from '../../hooks/use-click-outside';


export const Header: FC = () => {
  let user: any
  const _user = localStorage.getItem("user")
	if (_user) {
		user = JSON.parse(_user)
	}

  const [profileLink, setProfileLink] = useState({ display: 'none' });
  
  const handleMouseOverHeader = (event: MouseEvent<HTMLElement>) => {
    setProfileLink({ display: 'flex' });  
  } 

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setProfileLink({ display: 'none' });  
  }
  );

  return (
    <header className={styles.header} ref={ref}>
      <NavLink to='/' className={styles.logoContainer}>
        <Logo />
      </NavLink>
      {user?  ( 
        (user.tag ==='student' 
        ?
        (<>
        <div className={styles.userContainer}  onMouseOver={handleMouseOverHeader}>
          <img className={styles.userIcon} src={user.photo} alt={user.name}></img>
          <p className={styles.userName}>{user.name}</p>
          
        </div>
        <HeaderLink user={user} style={profileLink}/>
        </>)
        : 
        (<NavLink to='admin' className={styles.userContainer}>
          <img className={styles.userIcon} src={user.photo} alt={user.name}></img>
          <p className={styles.userName}>{user.name}</p>
        </NavLink>))
      ) : null}
    </header>
  );
}

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


