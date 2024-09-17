// import { useState, useEffect, useRef } from 'react';
// import clsx from 'clsx';

// import { IPropsArticleParamsForm, IAllOptions } from 'src/interfaces';
// import { defaultArticleState } from 'src/constants/articleProps';
// import { ArrowButton } from 'components/arrow-button';
// import { Button } from 'components/button';
// import { Text } from '../text';
// import { Select } from '../select';
// import { RadioGroup } from '../radio-group';
// import { Separator } from '../separator';
// import {
// 	fontFamilyOptions,
// 	fontSizeOptions,
// 	fontColors,
// 	backgroundColors,
// 	contentWidthArr,
// } from 'src/constants/articleProps';

// import styles from './ArticleParamsForm.module.scss';

// export const ArticleParamsForm = ({
// 	toggleOpenFn,
// 	openState,
// 	setPageState,
// }: IPropsArticleParamsForm) => {
// 	const [formState, setFormState] = useState<IAllOptions>(defaultArticleState);

// 	// Создаём ссылку на форму, чтобы отслеживать клики вне её области
// 	const formRef = useRef<HTMLDivElement | null>(null);

// 	// Функция для сброса параметров на значения по умолчанию
// 	function setDefaultOptions() {
// 		setFormState(defaultArticleState);
// 		setPageState(defaultArticleState);
// 	}

// 	// Функция для обработки отправки формы
// 	function submitForm(evt: React.SyntheticEvent) {
// 		evt.preventDefault();
// 		setPageState(formState);
// 	}

// 	useEffect(() => {
// 		function handleClickOutside(event: MouseEvent) {
// 			// Проверяем, открыт ли контейнер и был ли клик вне формы
// 			if (
// 				openState &&
// 				formRef.current &&
// 				!formRef.current.contains(event.target as Node)
// 			) {
// 				toggleOpenFn();
// 			}
// 		}

// 		// Добавляем слушатель событий клика
// 		document.addEventListener('mousedown', handleClickOutside);

// 		// Очищаем слушатель при размонтировании компонента
// 		return () => {
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, [openState, toggleOpenFn]);

// 	return (
// 		<>
// 			<ArrowButton toggleOpenFn={toggleOpenFn} openState={openState} />
// 			<aside
// 				ref={formRef} // Привязываем ссылку к форме
// 				className={clsx({
// 					[styles.container]: true,
// 					[styles.container_open]: openState,
// 				})}>
// 				<form className={styles.form} onSubmit={submitForm}>
// 					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
// 						Задайте параметры
// 					</Text>
// 					<Select
// 						title='шрифт'
// 						selected={formState.fontFamilyOption}
// 						options={fontFamilyOptions}
// 						onChange={(selected) =>
// 							setFormState((oldState) => ({
// 								...oldState,
// 								fontFamilyOption: selected,
// 							}))
// 						}
// 					/>
// 					<RadioGroup
// 						title='размер шрифта'
// 						name='font-size'
// 						selected={formState.fontSizeOption}
// 						options={fontSizeOptions}
// 						onChange={(selected) =>
// 							setFormState((oldState) => ({
// 								...oldState,
// 								fontSizeOption: selected,
// 							}))
// 						}
// 					/>
// 					<Select
// 						title='цвет шрифта'
// 						selected={formState.fontColor}
// 						options={fontColors}
// 						onChange={(selected) =>
// 							setFormState((oldState) => ({ ...oldState, fontColor: selected }))
// 						}
// 					/>
// 					<Separator />
// 					<Select
// 						title='цвет фона'
// 						selected={formState.backgroundColor}
// 						options={backgroundColors}
// 						onChange={(selected) =>
// 							setFormState((oldState) => ({
// 								...oldState,
// 								backgroundColor: selected,
// 							}))
// 						}
// 					/>
// 					<Select
// 						title='ширина контента'
// 						selected={formState.contentWidth}
// 						options={contentWidthArr}
// 						onChange={(selected) =>
// 							setFormState((oldState) => ({
// 								...oldState,
// 								contentWidth: selected,
// 							}))
// 						}
// 					/>
// 					<div className={styles.bottomContainer}>
// 						<Button
// 							title='Сбросить'
// 							htmlType='reset'
// 							type='clear'
// 							onClick={setDefaultOptions}
// 						/>
// 						<Button title='Применить' htmlType='submit' type='apply' />
// 					</div>
// 				</form>
// 			</aside>
// 		</>
// 	);
// };

import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { IPropsArticleParamsForm, IAllOptions } from 'src/interfaces';
import {
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
	setPageState,
}: IPropsArticleParamsForm) => {
	const [formState, setFormState] = useState<IAllOptions>(defaultArticleState);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// Создаём ссылку на форму, чтобы отслеживать клики вне её области
	const formRef = useRef<HTMLDivElement | null>(null);

	// Функция для переключения состояния формы (открыта/закрыта)
	function toggleOpen() {
		setIsOpen((prev) => !prev);
	}

	// Функция для сброса параметров на значения по умолчанию
	function setDefaultOptions() {
		setFormState(defaultArticleState);
		setPageState(defaultArticleState);
	}

	// Функция для обработки отправки формы
	function submitForm(evt: React.SyntheticEvent) {
		evt.preventDefault();
		setPageState(formState);
	}

	// Обработчик для закрытия формы при клике вне её области
	useEffect(() => {
		if (!isOpen) return; // Если форма закрыта, обработчик не вешаем

		function handleClickOutside(event: MouseEvent) {
			if (formRef.current && !formRef.current.contains(event.target as Node)) {
				setIsOpen(false); // Закрываем форму при клике вне её
			}
		}

		// Добавляем слушатель событий клика при открытой форме
		document.addEventListener('mousedown', handleClickOutside);

		// Очищаем слушатель при размонтировании компонента или при закрытии формы
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]); // Перенавешиваем обработчик только при изменении isOpen

	return (
		<>
			<ArrowButton toggleOpenFn={toggleOpen} openState={isOpen} />
			<aside
				ref={formRef} // Привязываем ссылку к форме
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form} onSubmit={submitForm}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								fontFamilyOption: selected,
							}))
						}
					/>
					<RadioGroup
						title='размер шрифта'
						name='font-size'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								fontSizeOption: selected,
							}))
						}
					/>
					<Select
						title='цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(selected) =>
							setFormState((oldState) => ({ ...oldState, fontColor: selected }))
						}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								backgroundColor: selected,
							}))
						}
					/>
					<Select
						title='ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								contentWidth: selected,
							}))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={setDefaultOptions}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
