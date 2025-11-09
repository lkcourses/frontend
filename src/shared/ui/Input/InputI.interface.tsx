import type { ComponentState, HTMLInputTypeAttribute } from "react"

export interface InputI {
    placeholderInput: string,
    value?: string,
    setValue?: ComponentState
    disable?: boolean,
    name?: string,
    classNameInp: string,
    classNameCnt?: string,
    animation?: boolean,
    typeInp: HTMLInputTypeAttribute
}