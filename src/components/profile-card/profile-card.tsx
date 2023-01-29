import { FC, MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ChatIcon } from '../../assets/images/ChatIcon.svg';
import { CommentsBlock } from '../comments-block/commets-block';
import '../../assets/css/common.scss';
import styles from './profile-card.module.css';
import { ReactionCounter } from '../reactions-counter/reactions-counter';
import { TReaction, TStudentDetail } from '../../types/types';
import { api } from '../../api/Api';
import { isDataView } from 'util/types';

interface IProfileCard {
  profile: TStudentDetail;
  user: any;
  desktopMode: boolean;
}

export const ProfileCard: FC<IProfileCard> = ({ profile, user, desktopMode }) => {
  const [photoStyle, setPhotoStyle] = useState({});
  const [profileNameStyle, setProfileNameStyle] = useState({});
  const [chatIconStyle, setChatIconStyle] = useState(
    desktopMode ? { display: 'none' } : { display: 'flex' }
  );
  const [showComments, setShowComments] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(owner, 'THIS IS OWNER');
  //   api.getReactionsForUser(owner._id)
  //   .then((data) => {
  //     setCount(data.items);
  //   })
  //   .catch((err: any) => console.log(err));
  // }, []);

  const [isOwner, setOwner] = useState<boolean>(false);
  useEffect(() => {
    if (user._id === profile._id) {
      setOwner(true);
    } else {
      setOwner(false);
    }
  }, []);


  useEffect(() => {
    api
      .getProfileData(profile._id)
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
    event.stopPropagation();
    setShowComments(!showComments);
  };

  return (
    <Link className={styles.cardLink} to={{
      pathname: `/detail/${profile._id}`
    }}>
      <article
        className={styles.profileCard}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={styles.profilePhotoContainer} style={photoStyle}>
          <img
            className={styles.profilePhoto}
            src={profile.profile.photo}
            alt={profile.profile.name}
          />
        </div>

        <p
          className={`${styles.profileName} text_type_header-small`}
          style={profileNameStyle}
        >
          {profile.profile.name}
        </p>
        <p className={`${styles.profileCity} text_type_main-default`}>
          {profile.profile.city!.name}
        </p>
        <ChatIcon
          className={styles.chatIcon}
          style={chatIconStyle}
          onClick={commentsBlockToggle}
        />

        {count ? ((user.tag === 'curator' || isOwner === true) && (
          <ReactionCounter counter={count} style={chatIconStyle} />)) : null}
        <CommentsBlock isOpen={showComments} target={null} owner={isOwner} id={profile._id}/>
      </article>
    </Link>
  );
};
