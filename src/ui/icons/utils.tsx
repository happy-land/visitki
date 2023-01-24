import { SVGProps } from "react";

type IconType = 
  | 'link-active'
  | 'primary'
  | 'outlined';

export interface IIconProps extends SVGProps<SVGSVGElement> {
  type: IconType;
  size?: '16';
  onClick?: () => void;
}

