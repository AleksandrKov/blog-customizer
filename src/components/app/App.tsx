import { CSSProperties, useState } from 'react';

import 'src/styles/index.scss';
import styles from 'src/styles/index.module.scss';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

export const App = () => {
	const [appSate, setAppState] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': appSate.fontFamilyOption.value,
					'--font-size': appSate.fontSizeOption.value,
					'--font-color': appSate.fontColor.value,
					'--container-width': appSate.contentWidth.value,
					'--bg-color': appSate.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onApply={setAppState} />
			<Article />
		</main>
	);
};
