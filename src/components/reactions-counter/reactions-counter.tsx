import { SetStateAction, useEffect, useState } from "react";
import styles from "./reactions-counter.module.css";

export const ReactionCounter = (id: string) => {

// переместить в апи
const checkResponse = (res: Response) => {
  if (!res.ok) {
    return res.json()
      .then((err: { message: string | undefined }) => {
        throw new Error(err.message);
      });
  }
  return res.json();
}

const getReactions = (id: string) => fetch(`/profiles/${id}/reactions?offset=41026140&limit=20`)
.then(checkResponse)
  
const [commentsNumber, setCommentsNumber] = useState<number>(0);

  useEffect(() => {
    getReactions(id)
    .then((data) => {
      setCommentsNumber(data.total);
    })
    .catch((err: any) => console.log(err));     
  }, []);

  return (
    <div className={styles.commentCounter}>
      {commentsNumber < 100 ? commentsNumber : '99+'}
    </div> 
  )
}