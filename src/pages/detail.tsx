import React, { FC } from "react";
import { useParams } from 'react-router-dom';
import styles from './detail.module.css';
import { StudentDetails } from "../components/student-details/student-details";
import { TStudent } from '../types/types';
import { any } from "prop-types";
import { anyTypeAnnotation } from "@babel/types";
import { analyze } from "eslint-scope";

type TParams = {
  id: string;
};

export const DetailPage: FC = () => {
	const { id } = useParams<TParams>();

  return (
		<div className={styles.container}>
      <StudentDetails />
    </div>
  )
}