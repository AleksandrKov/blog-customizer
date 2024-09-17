import { OptionType } from './constants/articleProps'

export interface IAllOptions {
	fontFamilyOption: OptionType;
	fontSizeOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

export interface IPropsArrowButton {
	toggleOpenFn: OnClick;
	openState: boolean;
}

export type OnClick = () => void;

export interface IPropsArticleParamsForm {
	toggleOpenFn: OnClick;
	openState: boolean;
	setPageState: React.Dispatch<React.SetStateAction<IAllOptions>>;
}

export type ChangeSelectFn = (selection: OptionType) => void;

export interface IPropsArticle {
	closeFn: OnClick;
}
