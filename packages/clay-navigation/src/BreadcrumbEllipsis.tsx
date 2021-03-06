/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import React, {useState} from 'react';
import {FocusScope, useFocusManagement} from '@clayui/shared';
import {IBreadcrumbItem} from './BreadcrumbItem';

export interface IBreadcrumbEllipsisProps {
	/**
	 * Property to define BreadcrumbEllipsis's items.
	 */
	items: Array<IBreadcrumbItem>;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;
}

export const BreadcrumbEllipsis: React.FunctionComponent<
	IBreadcrumbEllipsisProps
> = ({items, spritemap, ...otherProps}) => {
	const [active, setActive] = useState(false);
	const focusManager = useFocusManagement();

	return (
		<FocusScope focusManager={focusManager}>
			<ClayDropDown
				active={active}
				className="breadcrumb-item"
				containerElement="li"
				onActiveChange={newVal => setActive(newVal)}
				trigger={
					<ClayButton
						className="breadcrumb-link"
						data-testid="breadcrumbDropdownTrigger"
						displayType="unstyled"
						ref={ref => focusManager.createScope(ref, 'input')}
					>
						<ClayIcon spritemap={spritemap} symbol="ellipsis-h" />
						<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
					</ClayButton>
				}
				{...otherProps}
			>
				<ClayDropDown.ItemList>
					{items.map(({href, label, onClick}, i) => (
						<ClayDropDown.Item
							href={href}
							innerRef={ref =>
								focusManager.createScope(ref, `item${i}`, true)
							}
							key={`breadcrumbEllipsisItem${i}`}
							onClick={onClick}
							title={label}
						>
							{label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.ItemList>
			</ClayDropDown>
		</FocusScope>
	);
};
