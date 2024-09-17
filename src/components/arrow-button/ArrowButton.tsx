import clsx from 'clsx';

import { IPropsArrowButton } from 'src/interfaces';


import styles from './ArrowButton.module.scss';
import arrow from 'src/images/arrow.svg';
/** Функция для обработки открытия/закрытия формы */

export const ArrowButton = ({ toggleOpenFn, openState }: IPropsArrowButton) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: openState })}
			onClick={toggleOpenFn}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: openState })}
			/>
		</div>
	);
};
