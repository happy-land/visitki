import { FC } from "react";

type FieldsetOther = {
  label: string;
  type: string;
  sizeRecommendTitel: string;
  text: string;
  nameTextArea: string;
};

export const FieldsetOtherInfo: FC<FieldsetOther> = ({
  label,
  type,
  sizeRecommendTitel,
  text,
  nameTextArea,
}) => {
  return (
    <fieldset>
      <label>{label}</label>
      <input type={type} />
      <p>{sizeRecommendTitel}</p>
      <textarea name={nameTextArea}>{text}</textarea>
    </fieldset>
  );
};
