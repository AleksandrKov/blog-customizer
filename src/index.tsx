import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { IAllOptions } from './interfaces';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [pageState, setPageState] = useState<IAllOptions>(defaultArticleState);

	function toggleOpen() {
		setIsOpen((oldVal) => !oldVal);
	}

	function handleClose() {
		setIsOpen(false);
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				toggleOpenFn={toggleOpen}
				openState={isOpen}
				setPageState={setPageState}
			/>
			<Article closeFn={handleClose} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
