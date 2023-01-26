import { FC, useState, useEffect } from 'react';
import { Emoji } from '../emoji/emoji';
import { api } from '../../api/Api';

import ThumbsUpIcon from '../../ui/icons/thumbsup-icon.svg';
import ThumbsDownIcon from '../../ui/icons/thumbsdown-icon.svg';
import WawingHandIcon from '../../ui/icons/wawinghand-icon.svg';
import SlightlySmilingHeadIcon from '../../ui/icons/slightlysmilinghead-icon.svg';
import PensiveFaceIcon from '../../ui/icons/pensiveface-icon.svg';
import RollingIcon from '../../ui/icons/rolling-icon.svg';
import GrimacingFaceIcon from '../../ui/icons/grimacingface-icon.svg';
import FaceScreamigIcon from '../../ui/icons/facescreaming-icon.svg';
import HeartEyesIcon from '../../ui/icons/hearteyes-icon.svg';
import BlackHeartIcon from '../../ui/icons/blackheart-icon.svg';


import styles from './emoji-block.module.css';

export const EmojiBlock: FC = () => {

  const [ emotions, setEmotions ] = useState(Array);
  const [ emojis, setEmojis ] = useState([{
    type: 'like',
    image: ThumbsUpIcon,
    counter: 0
  },
  {
    type: 'dislike',
    image: ThumbsDownIcon,
    counter: 0
  },
  {
    type: 'wave',
    image: WawingHandIcon,
    counter: 0
  },
  {
    type: 'smile',
    image: SlightlySmilingHeadIcon,
    counter: 0
  },
  {
    type: 'upset',
    image: PensiveFaceIcon,
    counter: 0
  },
  {
    type: 'funny',
    image: RollingIcon,
    counter: 0
  },
  {
    type: 'confused',
    image: GrimacingFaceIcon,
    counter: 0
  },
  {
    type: 'scream',
    image: FaceScreamigIcon ,
    counter: 0
  },{
    type: 'love',
    image: HeartEyesIcon,
    counter: 0
  },{
    type: 'heart',
    image: BlackHeartIcon,
    counter: 0
  },
]);
let owner: any;
const _owner = localStorage.getItem(("user"));
if (_owner) {
  owner = JSON.parse(_owner)
}

useEffect(() => {
  api.getReactionsForUser(owner._id)
    .then((data) => {
      setEmotions(data.items.filter((element) => element.emotion));
      emojis && setEmojis(emojis.map(element => {
        return {
          ...element,
          counter: countEmojis(emotions)[element.type] | 0
        }
      }))
})
    .catch(err => console.log(err));
}, [])

useEffect(() => {
      emojis && setEmojis(emojis.map(element => {
        return {
          ...element,
          counter: countEmojis(emotions)[element.type] | 0
        }
      }))
}, [emotions])

  const countEmojis = (array: any[]) => {
    return array.reduce((acc: { [emotion: string]: number}, val) => {
        const emotion = val.emotion;
        acc[emotion] = (acc[emotion] || 0) + 1;
        return acc;
    }, {})
  }
  
  return (
    <div className={styles.container}>
      <ul className={styles.emojiList}>
        {emojis.map((element, index) =>
        <li className={styles.emojiItem} key={index}>
          <Emoji image={element.image} counter={element.counter} type={element.type} />
        </li>)}
      </ul>
    </div>
  );
};
