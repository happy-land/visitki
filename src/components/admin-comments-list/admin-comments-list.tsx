import React, { FC } from "react";
import commentstyle from "./admin-comments-list.module.css";
import deleteIcon from "../../images/delete-icon.png";
{/*import {getStudentsApi} from '../../utils/Api'*/}

export const AdminCommentsList: FC = () => {
  return (
    <div className={commentstyle.page_wrapper}>
      <div className={commentstyle.headings_wrapper}>
        <ul className={commentstyle.headings_list}>
        <li>Когорта</li>
        <li>Дата</li>
        <li>Отправитель</li>
        <li>Получатель</li>
        <li>Откуда комментарий</li>
        <li>Текст комментария</li>
      </ul>
      </div>
      <div className={commentstyle.list_wrapper}>
        <ul className={commentstyle.list}>
          {getStudentsApi.map((element, index) => (
            <li className={commentstyle.list_item} key={index}>
              <p className={commentstyle.list_item_text}>{element.team}</p>
              <p className={commentstyle.list_item_text}>{element.date}</p>
              <p className={commentstyle.list_item_text}>{element.fullName}</p>
              <p className={commentstyle.list_item_text}>{element.fullName}</p>
              <p className={commentstyle.list_item_text}>{element.block}</p>
              <p className={commentstyle.list_item_text}>{element.comment}</p>
              <div className={commentstyle.delete_icon}>
                <img alt="delete icon" src={deleteIcon}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
