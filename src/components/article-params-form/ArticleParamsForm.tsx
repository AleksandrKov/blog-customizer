// import { ArrowButton } from 'components/arrow-button';
// import { Button } from 'components/button';

// import styles from './ArticleParamsForm.module.scss';

// export const ArticleParamsForm = () => {
// 	return (
// 		<>
// 			<ArrowButton onClick={() => {}}/>
// 			<aside className={styles.container}>
// 				<form className={styles.form}>
// 					<div className={styles.bottomContainer}>
// 						<Button title='Сбросить' type='reset' />
// 						<Button title='Применить' type='submit' />
// 					</div>
// 				</form>
// 			</aside>
// 		</>
// 	);
// };

import { useState } from 'react';
import clsx from 'clsx';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	// Создаём состояние isOpen для отслеживания, открыта ли форма.
	const [isOpen, setIsOpen] = useState(false);

	// Функция для обработки клика по кнопке ArrowButton.
	const handleToggleForm = () => {
		setIsOpen((prev) => !prev); // Переключаем состояние isOpen.
	};

	return (
		<>
			{/* Передаем обработчик клика handleToggleForm в ArrowButton */}
			<ArrowButton onClick={handleToggleForm} />
			{/* Применяем класс .container_open, если isOpen равно true */}
			<aside className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

