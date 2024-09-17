import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;
const [isOpen, setIsOpen] = useState<boolean>(false);

function toggleOpen() {
	setIsOpen((oldVal) => !oldVal);
}

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton toggleOpenFn={toggleOpen} openState={isOpen} />
			</>
		);
	},
};
