import type { ReactNode } from "react";

export interface ButtonI {
	defaultStyles?: boolean
	className?: string,
	color?: string,
	disabled?: boolean
	width?: "max" | number,
	height?: number,
	typeBtn: 'submit' | 'reset' | 'button',
	children: ReactNode 
}