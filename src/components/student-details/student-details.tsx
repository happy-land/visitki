import { FC, MouseEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './student-details.module.css';
import { ReactComponent as ChatIcon } from '../../assets/images/ChatIcon.svg';
import { CommentsBlock } from '../comments-block/commets-block';
import { ReactionCounter } from '../reactions-counter/reactions-counter';
import { useTheme } from '../../hooks/use-theme';
import { TStudentDetail } from '../../types/types';
import { api } from '../../api/Api';

type TStudentDetails = {
	student?:TStudentDetail;
}

type TParams = {
  id: string;
};

export const StudentDetails: FC<TStudentDetails> = () => {
	let user: any
  const _user = localStorage.getItem("user")
	if (_user) {
		user = JSON.parse(_user)
	}

	const { id } = useParams<TParams>();
	
	const [student, setStudent] = useState<TStudentDetail>();

	const [isOwner, setOwner] = useState<boolean>(false);
	
	useEffect(() => {
    if (user._id === id) {
			setOwner(true)
		} else {
			setOwner(false)
		}
  }, []);

	useEffect(() => {
    api.getProfileData(`${id}`)
      .then((data) => {
				setStudent(data);
			})
      .catch((err: any) => console.log(err));
  }, []);

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
	useEffect(() => {
    if (student?.profile.template === "dolore quis sint mollit") {
      setTheme('romantic'); 
    } else if (student?.profile.template === "dolore quis sint mollite") {
			setTheme('bold'); 
    } else {
			setTheme('serious');
		}
  }, []);

	useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1440) {
        setDeskTopMode(true);
      } else {
        setDeskTopMode(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
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
			setChatIconStyleHobby({ display: 'flex' });
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
  				<h2 className={styles.userName}>{student?.profile.name}</h2>
      		<p className={styles.userCity}>{student?.profile.city?.name}</p>
      		<div className={styles.socialNetwork}>
        		<a className={styles.iconTelegram} href={`https://t.me/${student?.profile.telegram}`}></a>
        		<a className={styles.iconGithub} href={`https://github.com/${student?.profile.github}`}></a>
      		</div>
      	</div>
      	<div className={styles.wrapperAvatar} onMouseOver={handleMouseOverPhoto}
      onMouseOut={handleMouseOutPhoto}>
        	<img className={styles.userAvatar} src={student?.profile.photo} alt="Фотография пользователя" />
					<div className={styles.userAvatarBold}></div>
					<ChatIcon className={styles.chatIcon} style={chatIconStylePhoto} onClick={commentsBlockTogglePhoto} />
      		<CommentsBlock isOpen={showCommentsPhoto} target={null} owner={isOwner} id={`${id}`}/>
      	</div>
				
    		{ student?.profile.quote && (<div className={styles.quote} onMouseOver={handleMouseOverQuote}
      onMouseOut={handleMouseOutQuote}>
        	<div className={styles.quoteIcon}></div>
        	<blockquote className={styles.quoteText}>{student?.profile.quote}</blockquote>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleQuote} onClick={commentsBlockToggleQuote} />
      		<CommentsBlock isOpen={showCommentsQuote} target={null} owner={isOwner} id={`${id}`}/>
      	</div>)}
				
    	</div>
      <div className={styles.blockInfo}>
			{student?.info?.hobby && 
				(<div className={styles.unit} onMouseOver={handleMouseOverHobby}
      onMouseOut={handleMouseOutHobby}>
					<div className={styles.line}></div>
          <h3 className={styles.unitTitle}>увлечения</h3>
          <p className={styles.description}>{student?.info?.hobby?.text}</p>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleHobby} onClick={commentsBlockToggleHobby} />
      		{(user.tag === 'curator' || isOwner === true) && 
					(<ReactionCounter counter={student.info.hobby.reactions} style={chatIconStyleHobby}/>)}
					<CommentsBlock isOpen={showCommentsHobby} target={'hobby'} owner={isOwner} id={`${id}`}/>
				</div>)}
				
      	{student?.info?.status && 
				(<div className={styles.unit} onMouseOver={handleMouseOverStatus}
      onMouseOut={handleMouseOutStatus}>
					<div className={styles.line}></div>
          <h3 className={styles.unitTitle}>семья</h3>
          <p className={styles.description}>{student?.info?.status?.text}</p>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleStatus} onClick={commentsBlockToggleStatus} />
      		{(user.tag === 'curator' || isOwner === true) && 
					(<ReactionCounter counter={student.info.status.reactions} style={chatIconStyleStatus}/>)}
					<CommentsBlock isOpen={showCommentsStatus} target={'status'} owner={isOwner} id={`${id}`}/>
				</div>)}
				
        {student?.info?.job && 
				(<div className={styles.unit} onMouseOver={handleMouseOverJob}
      onMouseOut={handleMouseOutJob}>
					<div className={styles.line}></div>
          <h3 className={styles.unitTitle}>сфера</h3>
          <p className={styles.description}>{student?.info?.job?.text}</p>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleJob} onClick={commentsBlockToggleJob} />
      		{(user.tag === 'curator' || isOwner === true) && 
					(<ReactionCounter counter={student.info.job.reactions} style={chatIconStyleJob}/>)}
					<CommentsBlock isOpen={showCommentsJob} target={'job'} owner={isOwner} id={`${id}`}/>
				</div>)}
				
        {student?.info?.edu && 
				(<div className={styles.unit} onMouseOver={handleMouseOverEdu}
      onMouseOut={handleMouseOutEdu}>
					<div className={styles.line}></div>
          <h3 className={styles.unitTitle}>учеба</h3>
          <p className={styles.description}>{student?.info?.edu?.text}</p>
					<ChatIcon className={styles.chatIcon} style={chatIconStyleEdu} onClick={commentsBlockToggleEdu} />
      		{(user.tag === 'curator' || isOwner === true) && 
					(<ReactionCounter counter={student.info.edu.reactions} style={chatIconStyleEdu}/>)}
					<CommentsBlock isOpen={showCommentsEdu} target={'edu'} owner={isOwner} id={`${id}`}/>
				</div>)}
				
      </div>
		</section>
  )
}