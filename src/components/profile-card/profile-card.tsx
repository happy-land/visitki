import { FC, MouseEvent, useEffect, useState } from 'react';
import { ReactComponent as ChatIcon } from '../../assets/images/ChatIcon.svg';
import { CommentsBlock } from '../comments-block/commets-block';
import '../../assets/css/common.scss';
import styles from './profile-card.module.css';
import { ReactionCounter } from '../reactions-counter/reactions-counter';
import { getStudentById } from '../../utils/api';

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IProfileCard {
  photo: IPhoto;
  onCardOver: (event: MouseEvent<HTMLElement>) => void;
  onCardOut: (event: MouseEvent<HTMLElement>) => void;
  desktopMode: boolean;
}

export const ProfileCard: FC<IProfileCard> = ({ photo, onCardOver, onCardOut, desktopMode }) => {
  let owner: any;
  const _owner = localStorage.getItem("user");
  if (_owner) {
		owner = JSON.parse(_owner)
	}


  const [photoStyle, setPhotoStyle] = useState({});
  const [profileNameStyle, setProfileNameStyle] = useState({});
  const [chatIconStyle, setChatIconStyle] = useState(desktopMode ? { display: 'none' } : { display: 'flex' });
  const [showComments, setShowComments] = useState<boolean>(false);
  const [count, setCount] = useState(0);

	useEffect(() => {
    getStudentById('abfccdaa23e0bd1c4448d2f3')
      .then((data) => {
				setCount(data.reactions);
			})
      .catch((err: any) => console.log(err));
  }, []);

  useEffect(() => {
    if (desktopMode) {
      setChatIconStyle({ display: 'none' }); 
    } else {
      setChatIconStyle({ display: 'flex' }); 
    }
  }, [desktopMode]);

  const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
    setPhotoStyle({ border: '2px solid #ff00a8' });
    setProfileNameStyle({ color: '#ff00a8' });
    if (desktopMode) setChatIconStyle({ display: 'flex' });
    
  };

  const handleMouseOut = (event: MouseEvent<HTMLElement>) => {
    setPhotoStyle({ border: 'none' });
    setProfileNameStyle({});
    if (desktopMode) setChatIconStyle({ display: 'none' });
  };

  const commentsBlockToggle = (event: MouseEvent) => {
    event.preventDefault();
    setShowComments(!showComments);
    console.log(showComments);

  }

  return (
    <article
      className={styles.profileCard}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={styles.profilePhotoContainer} style={photoStyle}>
      <img className={styles.profilePhoto} src={photo.thumbnailUrl} alt={photo.title} />
      </div>
      
      <p
        className={`${styles.profileName} text_type_header-small`}
        style={profileNameStyle}
      >
        Иванов Сергей {window.innerWidth}
      </p>
      <p className={`${styles.profileCity} text_type_main-default`}>Москва {desktopMode.toString()}</p>
      <ChatIcon className={styles.chatIcon} style={chatIconStyle} onClick={commentsBlockToggle} />
      {count && (<ReactionCounter counter={count} style={chatIconStyle}/>)}
      <CommentsBlock isOpen={showComments} />
    </article>
  );
};
