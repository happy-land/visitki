import React, {FC} from "react";
import {Button} from "../ui/button/button";
import {Input, InputTextArea} from "../ui/input/input";
import styles from "./profile.module.css";


export const ProfilePage: FC = () => {
	// const [formValues, setValue] = useState({
	// 	userPhoto: '',
	// 	userBirthday: '',
	// 	userCity: '',
	// 	userTelegramHandle: '',
	// 	userGitHubHandle: '',
	// 	userProfileView: 'serious',
	// 	userSlogan: '',
	// 	userHobbyImage: '',
	// 	userHobbyText: '',
	// 	userFamilyImage: '',
	// 	userFamilyText: '',
	// 	userJobText: '',
	// 	userStudyReason: '',
	// })
	// const [userPhotoValue, setUserPhoto] = useState<string>('');
	// const [userBirthdayValue, setUserBirthdayValue] = useState<string>('');
	// const [userCityValue, setUserCityValue] = useState<string>('');
	// const [userCityValue, setUserCityValue] = useState<string>('');

	return (
		<main>
			<form className={styles.formContainer}>
				<Input
					label='Ник в телеграм'
					name='telegram'
					id='telegram'
					type='text'
					placeholder='@example'
					/>
				<Input
					label='Ник на гитхабе'
					name='github'
					id='github'
					type='text'
					placeholder='@example'
				/>
				<InputTextArea
					maxLength={100}
					label='Девиз, цитата'
					name='quote'
					id='quote'
					placeholder='Не более 100 символов'
					/>
				<InputTextArea
					maxLength={300}
					label='Из какой сферы пришёл? Кем работаешь?'
					name='job'
					id='job'
					placeholder='Не более 300 символов'
				/>
				<InputTextArea
					maxLength={300}
					label='Почему решил учиться на веб-разработчика?'
					name='reason'
					id='reason'
					placeholder='Не более 300 символов'
				/>
				<Button type='primary' size='large'>
					Сохранить
				</Button>
			</form>
		</main>
	)
}