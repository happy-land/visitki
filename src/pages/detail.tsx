import React from "react";
import { FC } from "react";
import styles from './detail.module.css';
import axios from "axios";
import { useTheme } from "../hooks/use-theme";

import photoStudent from '../images/user-photo.png'
import telegram from '../images/telegram.svg'
import gitHub from '../images/GitHub.svg'
import hobby from '../images/hobby.png'
import family from '../images/family.png'

export const DetailPage: FC = () => {
	const { theme, setTheme } = useTheme();

	//переключатель темы
  const handleSeriousThemeClick = () => {
    setTheme('serious')
  }
  const handleRomanticThemeClick = () => {
    setTheme('romantic')
  }

	const handleBoldThemeClick = () => {
    setTheme('bold')
  }

  return (
			<section className={styles.section}>
    	<div className={styles.container}>
      	<div className={styles.user}>
  				<h2 className={styles.userName}>Виктория Листвиновская</h2>
      		<p className={styles.userCity}>Калуга</p>
      		<div className={styles.socialNetwork}>
        		<img className={styles.icon} src={telegram} alt="Telegram" />
        		<img className={styles.icon} src={gitHub} alt="GitHub" />
      		</div>
      	</div>
      	<div className={styles.wrapperAvatar}>
        	<img className={styles.userAvatar} src={photoStudent} alt="Фотография пользователя" />
					<div className={styles.userAvatarBold}></div>
        	<div className={styles.commentUserAvatar}>
        		<p className={styles.commentCounter}>2</p>
      		</div>
      	</div>
    		<div className={styles.blockQuote}>
        	<div className={styles.quoteIcon}></div>
        	<blockquote className={styles.quote}>Делай, что должно и будь, что будет.</blockquote>
        	<div className={styles.commentBlockQuote}>
          	<p className={styles.commentCounter}>2</p>
        	</div>
      	</div>
    	</div>
      <div className={styles.blockInfo}>
        <div className={styles.unit}>
          <div className={styles.line}></div>
            <div className={styles.unitTitleBlock}>
              <h3 className={styles.unitTitle}>увлечения</h3>
              <div className={styles.comment}>
                <p className={styles.commentCounter}>2</p>
              </div>
            </div>
          	<img className={styles.unitImage} src={hobby} alt="Хобби" />
            	<p className={styles.description}>
        				Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
                Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
                Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
              </p>
          </div>
          <div className={styles.unit}>
					<div className={styles.line}></div>
              <div className={styles.unitTitleBlock}>
              	<h3 className={styles.unitTitle}>Семья</h3>
                <div className={styles.comment}>
                  <p className={styles.commentCounter}>2</p>
                </div>
              </div>
            <img className={styles.unitImage} src={family} alt="Семья" />
              <p className={styles.description}>
                Замужем, двое детей, собака. Живу в городе Калуга, люблю этот маленький городок.
                С собакой часто ходим на прогулки и наблюдаем за природой
              </p>
          </div>
        	<div className={styles.unit}>
					<div className={styles.line}></div>
            <div className={styles.unitTitleBlock}>
              <h3 className={styles.unitTitle}>сфера</h3>
              <div className={styles.comment}>
                <p className={styles.commentCounter}>2</p>
              </div>
            </div>
            <p className={styles.description}>
              Работаю в сфере гостиничного бизнеса, управляющим отелем. Люблю работать с людьми,
              постоянно вижу новых людей, общаюсь с посетителями, управляю персоналом,
              обучаю и принимаю на работу новых сотрудников.
            </p>
          </div>
          <div className={styles.unit}>
					<div className={styles.line}></div>
            <div className={styles.unitTitleBlock}>
              <h3 className={styles.unitTitle}>учеба</h3>
                <div className={styles.comment}>
                  <p className={styles.commentCounter}>2</p>
                </div>
            </div>
            <p className={styles.description}>
              Надоело работать в одной сфере, хочу сменить деятельность, нет шансов на рост, хочу быть айтишником.
              В детстве любила информатику, компьютерные игры и разбираться с программами.
              Вот вспомнила деские мечты и решила воплотить их в реальность. Надеюсь, что у меня все получится.
            </p>
          </div>
        </div>
  		</section>
  )
}