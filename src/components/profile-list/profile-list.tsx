import { FC, useEffect, MouseEvent, useState } from 'react';
import axios from 'axios';

import styles from './profile-list.module.css';

import { ReactComponent as Loader } from '../../assets/images/Loader.svg';

import { Link } from 'react-router-dom';
import { ProfileCard } from '../profile-card/profile-card';
import { api } from '../../api/Api';
import { TStudent } from '../../types/types';

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const ProfileList: FC = () => {
  // const [photos, setPhotos] = useState<Array<TStude>>([]);
  const [profiles, setProfiles] = useState<Array<TStudent>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [cardLimit, setCardLimit] = useState<number>(0);
  const [desktopMode, setDeskTopMode] = useState<boolean>(true);

  useEffect(() => {
    if (cardLimit === 0) {
      if (window.innerWidth >= 1440) {
        setCardLimit(8);
        setDeskTopMode(true);
      } else if (window.innerWidth < 1440 && window.innerWidth >= 900) {
        setCardLimit(6);
        setDeskTopMode(false);
      } else if (window.innerWidth < 900 && window.innerWidth >= 400) {
        setCardLimit(4);
        setDeskTopMode(false);
      } else {
        setCardLimit(2);
        setDeskTopMode(false);
      }
    }
  }, [cardLimit, desktopMode]);

  useEffect(() => {
    const handleWindowResize = (event: Event) => {
      if (window.innerWidth >= 1440) {
        setDeskTopMode(true);
      } else {
        setDeskTopMode(false);
      }
    };

    window.addEventListener('resize', (event) => handleWindowResize(event));

    return () => {
      window.removeEventListener('resize', (event) => handleWindowResize(event));
    };
  }, []);

  useEffect(() => {
    api.getCohortData(cardLimit)
    .then((response) => {
      console.log(response);
      const totCount = 30;  /*response.total*/
      setProfiles(profiles.length < totCount ? [...profiles, ...response.items] : [...profiles]);
      setTotalCount(totCount);
    })
    .finally(() => {
      setFetching(false);
      setSpinner(false);
    })
  }, [fetching, cardLimit]);

  // useEffect(() => {
  //   if (fetching && cardLimit !== 0) {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/photos?_limit=${cardLimit}`)
  //       .then((response) => {
  //         console.log(response);
  //         const totCount = 30;
  //         setPhotos(
  //           photos.length < totCount ? [...photos, ...response.data] : [...photos]
  //         );
  //         setCurrentPage((prevState) => prevState + 1);
  //         setTotalCount(totCount);
  //       })
  //       .finally(() => {
  //         setFetching(false);
  //         setSpinner(false);
  //       });
  //   }
  // }, [fetching, cardLimit]);

  useEffect(() => {
    document.addEventListener('scroll', (event) => scrollHandler(event));

    return () => {
      document.removeEventListener('scroll', (event) => scrollHandler(event));
    };
  }, [totalCount, profiles]);

  const scrollHandler = (event: Event): void => {
    const target = event.target as Document;
    // console.log(photos, 'HERE IS photos.length');
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      profiles.length < totalCount
    ) {
      // приближаемся к нижнему краю страницы
      // console.log(profiles.length);
      setFetching(true);
    }
    // отображать спиннер или нет
    if (profiles.length < totalCount) {
      setSpinner(true);
    } else {
      setSpinner(false);
    }
    // console.log('scrollHeight', target.documentElement.scrollHeight); // общая высота страницы с учетом скролла
    // console.log('scrollTop', target.documentElement.scrollTop); // текущее положение скролла от верха страницы
    // console.log('innerHeight', window.innerHeight); // высота видимой области страницы (высота браузера)
  };


  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <div className={styles.citySelector}>Выберите город</div>
        <Link className={styles.mapLink} to='/map'>
          Посмотреть на карте
        </Link>
      </div>
      <div className={styles.cards}>
        {profiles.map((profile, index) => (
          <Link className={styles.cardLink} to='' key={index}>
            <ProfileCard profile={profile} desktopMode={desktopMode} />
          </Link>
        ))}
      </div>
      <div className={styles.spinnerContainer}>
        {spinner && <Loader className={styles.spinner} />}
      </div>
    </div>
  );
};
