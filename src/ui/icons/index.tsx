import { ThumbsUpIcon } from './thumbsup-icon';
import { ThumbsDownIcon } from './thumbs-down-icon';
import { WawingHandIcon } from './wawing-hand-icon';
import { IIconProps } from './utils';

export type TIcons = {
  ThumbsupIcon: React.FC<IIconProps>;
  ThumbsDownIcon: React.FC<IIconProps>;
  WawingHandIcon: React.FC<IIconProps>;
}

export {
  ThumbsUpIcon,
  ThumbsDownIcon,
  WawingHandIcon,
}