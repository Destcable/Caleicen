import { FC } from "react";

export interface IconProps { 
    icon: (size?: number, color?: string) => JSX.Element
    color?: string
    size?: number
}

export const Icon: FC<IconProps> = ({ 
    icon,
    size,
    color,
}) => { 
    return <span>{icon(size, color)}</span>
};