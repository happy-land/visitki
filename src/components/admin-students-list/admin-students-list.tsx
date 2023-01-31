import { FC, useEffect, useState, ChangeEvent, useRef, RefObject } from 'react';
import { Link } from 'react-router-dom';
import adminstyle from './admin-students-list.module.css';
import { api } from '../../api/Api';
import { TUser } from '../../types/types';
import deleteIcon from '../../assets/images/trash-can.svg';
import { StudentElement } from './admin-student-element';

import { ReactComponent as Loader } from '../../assets/images/Loader.svg';
import inputClear from '../../ui/form-icons/input-clear.svg';
import { Button } from '../../ui/button/button';

export const AdminStudentsList: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [students, setStudents] = useState<TUser[]>([]);
  const [order, setOrder] = useState('ASC');
  const [inputValue, setInputValue] = useState<string>('');
  const [clearIcon, setClearIcon] = useState(false);

  const fileLoad = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLoading(true);
    api
      .getUsersData()
      .then((data) => {
        const students = data.items.sort((a, b) => a.createdAt - b.createdAt);
        setStudents(students);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortingCohort = () => {
    if (order === 'ASC') {
      const sorted = [...students].sort((a, b) =>
        a.cohort.toLowerCase() > b.cohort.toLowerCase() ? 1 : -1
      );
      setStudents(sorted);
      setOrder('DSC');
    } else {
      const sorted = [...students].sort((a, b) =>
        a.cohort.toLowerCase() < b.cohort.toLowerCase() ? 1 : -1
      );
      setStudents(sorted);
      setOrder('ASC');
    }
  };

  const sortingEmail = () => {
    if (order === 'ASC') {
      const sorted = [...students].sort((a, b) =>
        a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1
      );
      setStudents(sorted);
      setOrder('DSC');
    } else {
      const sorted = [...students].sort((a, b) =>
        a.email.toLowerCase() < b.email.toLowerCase() ? 1 : -1
      );
      setStudents(sorted);
      setOrder('ASC');
    }
  };

  const sortingName = () => {
    if (order === 'ASC') {
      const sorted = [...students].sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
      setStudents(sorted);
      setOrder('DSC');
    } else {
      const sorted = [...students].sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      );
      setStudents(sorted);
      setOrder('ASC');
    }
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    event.target.value === '' ? setClearIcon(false) : setClearIcon(true);
  };

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      student.cohort.toLowerCase().includes(inputValue.toLowerCase()) ||
      student.email.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  const clearInput = () => {
    setInputValue('');
    setClearIcon(false);
  };

  return (
    <div className={adminstyle.page_wrapper}>
      <div className={adminstyle.content_wrapper}>
        <form className={adminstyle.form} onSubmit={() => {}}>
          <fieldset>
            <label className={adminstyle.label}>Фильтровать</label>
            <div className={adminstyle.container_input}>
              <img
                className={adminstyle.clearIcon}
                src={inputClear}
                style={clearIcon ? { display: 'flex' } : { display: 'none' }}
                onClick={clearInput}
              />
            </div>
            <input
              value={inputValue}
              onChange={(event) => handleInputChange(event)}
              className={adminstyle.filter_input}
              type='text'
              name='filter'
              placeholder='По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)'
            />
          </fieldset>
        </form>
        {isLoading ? (
          <div className={adminstyle.loaderContainer}>
            <Loader className={adminstyle.loader} />
          </div>
        ) : filteredStudents?.length ? (
          <>
            <div className={adminstyle.table}>
              <ul className={adminstyle.list_headings}>
                <li onClick={() => sortingCohort()}>Номер когорты</li>
                <li onClick={() => sortingEmail()}>E-mail</li>
                <li onClick={() => sortingName()}>Имя и фамилия студента</li>
              </ul>
              <div className={adminstyle.list_wrapper}>
                <ul className={adminstyle.list}>
                  {filteredStudents.map((element) => (
                    <StudentElement key={element._id} student={element} />
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className={`${adminstyle.list_wrapper} ${adminstyle.notfound}`}>
            Не удалось никого найти. Исправьте запрос или сбросьте фильтр
          </div>
        )}
      </div>
      <div className={adminstyle.loadfile_container}>
        <h1 className={adminstyle.loadfile_title}>Добавить студентов</h1>
        <p className={adminstyle.loadfile_description}>Чтобы добавить новых студентов, загрузите csv или xlsx файл: первая колонка должна содержать email студентов, вторая колонка — номер когорты.</p>
        <input type='file' ref={fileLoad} style={{ display: 'none' }} />
        <Button htmlType='button'>Выберите файл</Button>
      </div>
    </div>
  );
};
