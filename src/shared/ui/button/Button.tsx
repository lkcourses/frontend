import type { FC } from "react"
import type { ButtonI } from "./buttonI.interface"
import style from './button.module.css'

export const Button: FC<ButtonI> = ({defaultStyles=true, className, typeBtn, width, height, color, disabled=false, children}) => {
	return (
		defaultStyles
		? <button disabled={disabled} type={typeBtn} className={style.defButton}>{children}</button>
		: <button style={{width: width + 'px', height: height + 'px', backgroundColor: color}} disabled={disabled} type={typeBtn} className={className}>{children}</button>
	)
}