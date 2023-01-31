import { FC } from 'react';
import { ProfileList } from '../components/profile-list/profile-list';

import styles from './home.module.css';

export const HomePage: FC = () => {
  return (
    <main className={styles.container}>
      <ProfileList/>
    </main>
  );
};
