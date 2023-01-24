import { FC, MouseEvent, SetStateAction, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './student-details.module.css';
import { ReactComponent as ChatIcon } from '../../assets/images/ChatIcon.svg';
import { CommentsBlock } from '../comments-block/commets-block';
import { ReactionCounter } from '../reactions-counter/reactions-counter';
import { useTheme } from '../../hooks/use-theme';
import { TStudent } from '../../types/types';

import photoStudent from '../../assets/images/user-photo.png'
import hobby from '../../assets/images/hobby.png'
import family from '../../assets/images/family.png'

type TParams = {
  id: string;
};

type TStudentDetails = {
	student?:TStudent;
}

export const StudentDetails: FC<TStudentDetails> = () => {
	//const { id } = useParams<TParams>();
	//const id = '507f1f77bcf86cd799439011';
	//const [student, setStudent] = useState([]);

	//const checkResponse = (res: Response) => {
	//	if (!res.ok) {
	//		return res.json()
	//			.then((err: { message: string | undefined }) => {
	//				throw new Error(err.message);
	//			});
	//	}
	//	return res.json();
	//}

	//const getStudentById = (id: string) => fetch(`/profiles/${id}`)
  //.then(checkResponse)
	//.then((data) => console.log(data))

	//useEffect(() => {
  //  getStudentById(id)
  //    .then((data) => setStudent(data))
  //    .catch((err: any) => console.log(err));
  //}, []);

	const [desktopMode, setDeskTopMode] = useState<boolean>(true);
	const [chatIconStylePhoto, setChatIconStylePhoto] = useState(desktopMode ? { display: 'none' } : { display: 'flex' });
	const [chatIconStyleQuote, setChatIconStyleQuote] = useState(desktopMode ? { display: 'none' } : { display: 'flex' });
	const [chatIconStyleHobby, setChatIconStyleHobby] = useState(desktopMode ? { display: 'none' } : { display: 'flex' });
	const [chatIconStyleStatus, setChatIconStyleStatus] = useState(desktopMode ? { display: 'none' } : { display: 'flex' });
	const [chatIconStyleJob, setChatIconStyleJob] = useState(desktopMode ? { display: 'none' } : { display: 'flex' });
	const [chatIconStyleEdu, setChatIconStyleEdu] = useState(desktopMode ? { display: 'none' } : { display: 'flex' });
  const [showCommentsPhoto, setShowCommentsPhoto] = useState<boolean>(false);
	const [showCommentsQuote, setShowCommentsQuote] = useState<boolean>(false);
	const [showCommentsHobby, setShowCommentsHobby] = useState<boolean>(false);
	const [showCommentsStatus, setShowCommentsStatus] = useState<boolean>(false);
	const [showCommentsJob, setShowCommentsJob] = useState<boolean>(false);
	const [showCommentsEdu, setShowCommentsEdu] = useState<boolean>(false);

	const {theme, setTheme} = useTheme();

	//useEffect(() => {
  //  if (student.profile.template === "dolore quis sint mollit") {
  //    setTheme('seriuos'); 
  //  } else if (student.profile.template === "dolore quis sint mollit") {
	//		setTheme('romantic'); 
  //  } else {
	//		setTheme('bold');
	//	}
  //}, []);

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
    if (desktopMode) {
      setChatIconStylePhoto({ display: 'none' }); 
			setChatIconStyleQuote({ display: 'none' });
			setChatIconStyleHobby({ display: 'none' });
			setChatIconStyleStatus({ display: 'none' });
			setChatIconStyleJob({ display: 'none' });
			setChatIconStyleEdu({ display: 'none' });
    } else {
			setChatIconStylePhoto({ display: 'flex' }); 
			setChatIconStyleQuote({ display: 'flex' });
			setChatIconStyleStatus({ display: 'flex' });
			setChatIconStyleJob({ display: 'flex' });
			setChatIconStyleEdu({ display: 'flex' });
    }
  }, [desktopMode]);

  const handleMouseOverPhoto = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStylePhoto({ display: 'flex' });   
  };
  const handleMouseOutPhoto = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStylePhoto({ display: 'none' }); 
  };
	const handleMouseOverQuote = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleQuote({ display: 'flex' }); 
  };
  const handleMouseOutQuote = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleQuote({ display: 'none' }); 
  };
	const handleMouseOverHobby = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleHobby({ display: 'flex' }); 
  };
  const handleMouseOutHobby = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleHobby({ display: 'none' }); 
  };
	const handleMouseOverStatus = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleStatus({ display: 'flex' }); 
  };
  const handleMouseOutStatus = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleStatus({ display: 'none' }); 
  };
	const handleMouseOverJob = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleJob({ display: 'flex' }); 
  };
  const handleMouseOutJob = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleJob({ display: 'none' }); 
  };
	const handleMouseOverEdu = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleEdu({ display: 'flex' }); 
  };
  const handleMouseOutEdu = (event: MouseEvent<HTMLElement>) => {
    if (desktopMode) 
			setChatIconStyleEdu({ display: 'none' }); 
  };

  const commentsBlockTogglePhoto = (event: MouseEvent) => {
    setShowCommentsPhoto(!showCommentsPhoto);
  }
	const commentsBlockToggleQuote = (event: MouseEvent) => {
    setShowCommentsQuote(!showCommentsQuote);
  }
	const commentsBlockToggleHobby = (event: MouseEvent) => {
    setShowCommentsHobby(!showCommentsHobby);
  }
	const commentsBlockToggleStatus = (event: MouseEvent) => {
    setShowCommentsStatus(!showCommentsStatus);
  }
	const commentsBlockToggleJob = (event: MouseEvent) => {
    setShowCommentsJob(!showCommentsJob);
  }
	const commentsBlockToggleEdu = (event: MouseEvent) => {
    setShowCommentsEdu(!showCommentsEdu);
  }

 

  return (
    <section className={styles.section}>
    	<div className={styles.blockUser}>
      	<div className={styles.user}>
  				<h2 className={styles.userName}>Виктория Листвиновская</h2>
      		<p className={styles.userCity}>Калуга</p>
      		<div className={styles.socialNetwork}>
        		<a className={styles.iconTelegram} href='#'></a>
        		<a className={styles.iconGithub} href='#'></a>
      		</div>
      	</div>
      	<div className={styles.wrapperAvatar} onMouseOver={handleMouseOverPhoto}
      onMouseOut={handleMouseOutPhoto}>
        	<img className={styles.userAvatar} src={photoStudent} alt="Фотография пользователя" />
					<div className={styles.userAvatarBold}></div>
					<ChatIcon className={styles.chatIcon} style={chatIconStylePhoto} onClick={commentsBlockTogglePhoto} />
      		<CommentsBlock isOpen={showCommentsPhoto} />
					
      	</div>
				
				
    		<div className={styles.quote} onMouseOver={handleMouseOverQuote}
      onMouseOut={handleMouseOutQuote}>
        	<div className={styles.quoteIcon}></div>
        	<blockquote className={styles.quoteText}>Делай, что должно и будь, что будет.</blockquote>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleQuote} onClick={commentsBlockToggleQuote} />
      		<CommentsBlock isOpen={showCommentsQuote} />
      	</div>
				
    	</div>
      <div className={styles.blockInfo}>
        <div className={styles.unit} onMouseOver={handleMouseOverHobby}
      onMouseOut={handleMouseOutHobby} >
        	<div className={styles.line}></div>
        	<h3 className={styles.unitTitle}>увлечения</h3>
					<div className={styles.unitImageContainer}>
          	<img className={styles.unitImage} src={hobby} alt="Хобби" />
						<img className={styles.unitImage} src={family} alt="Хобби" />
						<img className={styles.unitImage} src={family} alt="Хобби" />
					</div>
        	<p className={styles.description}>
        		Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
          	Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
          	Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
        	</p>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleHobby} onClick={commentsBlockToggleHobby} />
      		<CommentsBlock isOpen={showCommentsHobby} />
      	</div>
				
      	<div className={styles.unit} onMouseOver={handleMouseOverStatus}
      onMouseOut={handleMouseOutStatus}>
					<div className={styles.line}></div>
          <h3 className={styles.unitTitle}>cемья</h3>
					<div className={styles.unitImageContainer}>
            <img className={styles.unitImage} src={family} alt="Семья" />
						<img className={styles.unitImage} src={family} alt="Семья" />
					</div>
          <p className={styles.description}>
            Замужем, двое детей, собака. Живу в городе Калуга, люблю этот маленький городок.
            С собакой часто ходим на прогулки и наблюдаем за природой
          </p>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleStatus} onClick={commentsBlockToggleStatus} />
      		<CommentsBlock isOpen={showCommentsStatus} />
        </div>
				
        <div className={styles.unit} onMouseOver={handleMouseOverJob}
      onMouseOut={handleMouseOutJob}>
					<div className={styles.line}></div>
          <h3 className={styles.unitTitle}>сфера</h3>
          <p className={styles.description}>
            Работаю в сфере гостиничного бизнеса, управляющим отелем. Люблю работать с людьми,
            постоянно вижу новых людей, общаюсь с посетителями, управляю персоналом,
            обучаю и принимаю на работу новых сотрудников.
          </p>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleJob} onClick={commentsBlockToggleJob} />
      		<CommentsBlock isOpen={showCommentsJob} />
        </div>
				
        <div className={styles.unit} onMouseOver={handleMouseOverEdu}
      onMouseOut={handleMouseOutEdu}>
					<div className={styles.line}></div>
          <h3 className={styles.unitTitle}>учеба</h3>
          <p className={styles.description}>
            Надоело работать в одной сфере, хочу сменить деятельность, нет шансов на рост, хочу быть айтишником.
            В детстве любила информатику, компьютерные игры и разбираться с программами.
            Вот вспомнила деские мечты и решила воплотить их в реальность. Надеюсь, что у меня все получится.
          </p>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleEdu} onClick={commentsBlockToggleEdu} />
      		<CommentsBlock isOpen={showCommentsEdu} />
        </div>
				
      </div>
		</section>
  )
}