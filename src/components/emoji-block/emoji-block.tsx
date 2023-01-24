import { FC, useState, useEffect } from 'react';
import { Emoji } from '../emoji/emoji';
import { getReaction } from '../../utils/api';

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


const reactions = {
  total: 8,
  items: [
    {
      _id: "c824a2de0b675b0acb5a2923",
      from: {
        _id: "e638ad9bce6d7efd1b5b035b",
        name: "Elvira Grady",
        email: "Anita93@hotmail.com"
      },
      target: "hobby",
      text: "Laborum omnis harum modi omnis architecto ipsam adipisci dolore."
    },
    {
      _id: "bad224dbc4a601caff7e0b2c",
      from: {
        _id: "e638ad9bce6d7efd1b5b035b",
        name: "Elvira Grady",
        email: "Anita93@hotmail.com"
      },
      target: "edu",
      text: "Soluta consectetur tempore eaque modi sequi autem ducimus."
    },
    {
      _id: "c2f15f9b4315bb20aebf9a1d",
      from: {
        _id: "e638ad9bce6d7efd1b5b035b",
        name: "Elvira Grady",
        email: "Anita93@hotmail.com"
      },
      target: "status",
      text: "Eveniet excepturi commodi eaque dignissimos quae nesciunt nam dolorum."
    },
    {
      _id: "38eb4bbe3da2fcf2d4cfcd59",
      from: {
        _id: "e638ad9bce6d7efd1b5b035b",
        name: "Elvira Grady",
        email: "Anita93@hotmail.com"
      },
      target: "job",
      text: "Accusantium neque minus tempora."
    },
    {
      _id: "0ebcdb97d72b2b17345c30c8",
      from: {
        _id: "e638ad9bce6d7efd1b5b035b",
        name: "Elvira Grady",
        email: "Anita93@hotmail.com"
      },
      target: null,
      text: "Libero ad tempora exercitationem numquam adipisci quibusdam doloremque incidunt."
    },
    {
      _id: "71d2cb1e9e2fdedb9ad435ac",
      from: {
        _id: "e638ad9bce6d7efd1b5b035b",
        name: "Elvira Grady",
        email: "Anita93@hotmail.com"
      },
      target: null,
      emotion: "like"
    },
    {
      _id: "28b1a7432df6dcf73ac9d45f",
      from: {
        _id: "e638ad9bce6d7efd1b5b035b",
        name: "Elvira Grady",
        email: "Anita93@hotmail.com"
      },
      target: null,
      emotion: "smile"
    },
    {
      _id: "3ebe958d84bd8de740abdaab",
      from: {
        _id: "e638ad9bce6d7efd1b5b035b",
        name: "Elvira Grady",
        email: "Anita93@hotmail.com"
      },
      target: null,
      emotion: "heart"
    }
  ]
}


type TEmotion = {
  emotion: string;
}

export const EmojiBlock: FC = () => {

  const [ emotions, setEmotions ] = useState([]);
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

  // получить список реакций с сервера
  // {{baseUrl}}/profiles/:id/reactions
  useEffect(() => {
    getReaction()
      .then((data) => {
        setEmotions(data.items.filter((element: { emotion: string; }) => element.emotion));
        emojis && setEmojis(emojis.map(element => {
          return {
            ...element,
            counter: countEmojis(emotions)[element.type] | 0
          }
        }))
  })
      .catch(err => console.log(err));
  }, [])

  const countEmojis = (array: Array<TEmotion>) => {
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
