import { ChangeEvent, FC, useState } from 'react';
import styles from './input-text.module.css';
import inputClear from '../form-icons/input-clear.svg';

interface IInputTextProps {
  onChange: (text: string) => void;
}

export const InputText: FC<IInputTextProps> = ({ onChange }) => {
  const [clearIcon, setClearIcon] = useState(false);
  const [inputText, setInputText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>, ) => {
    event.target.value === '' ? setClearIcon(false) : setClearIcon(true) ;
    setInputText(event.target.value);
    onChange(inputText);
  }

  return (
    <>
    <div className={styles.container}>
      <img className={styles.clearIcon} src={inputClear} style={clearIcon ? { display: 'flex' } : { display: 'none' }} />
    </div>
    <input
        onChange={handleChange}
        className={styles.input}
        type='text'
        name='filter'
        placeholder='По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)'
      />
    </>
    
  );
};
