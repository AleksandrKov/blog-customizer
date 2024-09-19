import clsx from 'clsx';
import { useRef, useState } from 'react';
import { useClose } from 'src/hooks/useClose';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import {
	ArticleStateType,
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export type ArticleParamsFormProps = {
	onApply: (setState: ArticleStateType) => void;
};

export const ArticleParamsForm = (prop: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);
	const asideRef = useRef<HTMLElement>(null);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const toggleButton = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	function setDefaultOptions() {
		prop.onApply(defaultArticleState);
		setFormState(defaultArticleState);
	}

	function submitForm(evt: React.SyntheticEvent) {
		evt.preventDefault();
		setFormState(formState);
		prop.onApply(formState);
	}

	useClose({
		isOpen: isMenuOpen,
		onClose: closeMenu,
		rootRef: asideRef,
	});

	return (
		<>
			<ArrowButton onClick={toggleButton} isMenuOpen={isMenuOpen} />
			<aside
				ref={asideRef}
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isMenuOpen,
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
