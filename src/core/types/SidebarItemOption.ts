import { FC } from "react";

export type SidebarItemOption = { 
    value: string;
    icon: FC;
    label: string,
    iconSize: number,
    color?: string
}