import { FC, useState, useEffect } from 'react';
import styles from "./reactions-counter.module.css";

type TReactionCounter = {
	counter?: number | null;
  style: {
    display:string
  }
}

export const ReactionCounter:FC<TReactionCounter> = ({counter, style}) => {
  const [count, setCount] = useState(counter);

  useEffect(() => {
    setCount(counter);
  }, []);

  return (
    <div className={styles.commentCounter} style={style}>
      {count === 0 || null ? '' : count! > 99 ? '99+' : count}
    </div>
  )
}