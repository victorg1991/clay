/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate the 'light' variant
	 */
	light?: boolean;

	/**
	 * Flag to indicate the small size
	 */
	small?: boolean;
}

const ClayLoadingIndicator: React.FunctionComponent<IProps> = ({
	className,
	light,
	small,
	...otherProps
}: IProps) => {
	return (
		<span
			aria-hidden="true"
			{...otherProps}
			className={classNames(className, 'loading-animation', {
				'loading-animation-light': light,
				'loading-animation-sm': small,
			})}
		/>
	);
};

export default ClayLoadingIndicator;
