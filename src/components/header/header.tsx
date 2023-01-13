import { Logo } from '../../ui/logo/logo';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.userContainer}>
        {/* <img className={styles.userIcon} src='' /> */}
        <p className={styles.userName}>Константин Константинопольский</p>
      </div>
    </header>
  );
};
