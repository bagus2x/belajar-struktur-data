/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ItemMenuWrapper, MenuContainer, MenuTitle } from './Menu.styled';

export const useClickOutsideListenerRef = (onClose: () => void) => {
	const ref = useRef(null);
	const escapeListener = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
	}, []);
	const clickListener = useCallback(
		(e: MouseEvent) => {
			console.log('hai')
			if (!ref.current) return;
			if (!(ref.current! as any).contains(e.target)) {
				onClose?.();
			}
		},
		[ref.current]
	);
	useEffect(() => {
		document.addEventListener('click', clickListener);
		document.addEventListener('keyup', escapeListener);
		return () => {
			document.removeEventListener('click', clickListener);
			document.removeEventListener('keyup', escapeListener);
		};
	}, []);
	return ref;
};

type MenuProps = {
	children?: any;
	fullWidth?: boolean;
	title: string | number;
	onChange: (value: string) => void;
};

export function Menu({ children, onChange, title, fullWidth }: MenuProps) {
	const [menu, setMenu] = useState(false);

	const handleItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const value = e.currentTarget.innerText;
		onChange(value);
		setMenu(!menu);
	};

	const handleMenuClick = () => {
		setMenu(!menu);
	};

	const handleClickOutside = () => {
		setMenu(false);
	};

	const ref = useClickOutsideListenerRef(handleClickOutside);

	return (
		<MenuContainer fullWidth={fullWidth} ref={ref}>
			<MenuTitle onClick={handleMenuClick}>{title}</MenuTitle>
			{menu && (
				<ItemMenuWrapper fullWidth={fullWidth}>
					{React.Children.map(children, (child) => {
						return React.cloneElement(child, { ...children?.props, onClick: handleItemClick });
					})}
				</ItemMenuWrapper>
			)}
		</MenuContainer>
	);
}
