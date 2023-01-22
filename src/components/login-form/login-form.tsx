import { FC, FormEvent, useCallback } from 'react';
import { Button } from '../../ui/button/button';
import { checkResponse, checkSuccess } from '../../utils/utils';

import styles from './login-form.module.css';

type TLoginCallback = (event: FormEvent) => void;

type TUserData = {
  data: Array<any>;  // any заменить на тип TUser, он пока не создан
}

export const LoginForm: FC = () => {
  const login = useCallback<TLoginCallback>((event) => {
    event.preventDefault();
    console.log('PRIVET');
    fetch('http://localhost:3000/users')
    .then((result) => checkResponse<TUserData>(result))
    .then((responseBody) => {
      if (responseBody) {
        console.log(responseBody);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  }, []);

  return (
    <div>
      <h1 className={styles.title}>С кем я учусь?</h1>
      <Button handleClick={login} variant='' type='primary'>
        Войти с Яндекс ID
      </Button>
    </div>
  );
};
