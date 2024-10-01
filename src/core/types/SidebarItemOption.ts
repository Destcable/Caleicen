export type SidebarItemOption = { 
    value: string;
    icon: () => JSX.Element;
    label: string,
    iconSize: number,
    color?: string
}