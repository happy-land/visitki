import React, {FC} from "react";
import styles from "./input.module.css";

type TInputProps = {
	label: string;
	name: string;
	id: string;
	type?: string;
	onChange?: any;
	placeholder?: string;
	value?: string;
}

export const Input: FC<TInputProps> = (
	{
		label,
		name,
		id,
		placeholder,
		onChange,
		value,
		type,
	}) => {
	// const [hover, setHover] = useState(false);
	// const [focus, setFocus] = useState(false);

	return (
		<div className={styles.inputContainer}>
			<label className={styles.labelText}>{label}</label>
			<input
				className={styles.input}
				name={name}
				id={id}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

type TInputTextAreaProps = {
	maxLength: number;
} & TInputProps


export const InputTextArea: FC<TInputTextAreaProps> = (
	{
		label,
		name,
		id,
		placeholder,
		onChange,
		value,
		maxLength
	}) => {
	// const [hover, setHover] = useState(false);
	// const [focus, setFocus] = useState(false);

	return (
		<div className={styles.inputContainer}>
			<label className={styles.labelText}>{label}</label>
			<textarea
				className={styles.input}
				name={name}
				id={id}
				maxLength={maxLength}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}