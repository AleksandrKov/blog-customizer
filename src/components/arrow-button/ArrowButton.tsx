import clsx from 'clsx';

import styles from './ArrowButton.module.scss';
import arrow from 'src/images/arrow.svg';

export type OnClick = () => void;

type ArrowButtonProps = {
	isMenuOpen: boolean;
	onClick: () => void;
};

export const ArrowButton = (prop: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={prop.onClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: prop.isMenuOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, {
					[styles.arrow_open]: prop.isMenuOpen,
				})}
			/>
		</div>
	);
};
