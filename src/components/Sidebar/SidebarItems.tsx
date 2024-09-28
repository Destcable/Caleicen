import { Children, cloneElement, FC, isValidElement, ReactElement } from "react"
import { SidebarItemProps } from "./SidebarItem";

interface SidebarItemsProps {
    value: string
    children: ReactElement<SidebarItemProps>[]
}

export const SidebarItems: FC<SidebarItemsProps> = ({
    value,
    children
}) => Children.map(children, (child) => {
    if (isValidElement(child)) {
        if (child.props.value === value) return cloneElement(child, { isActive: true })
    }

    return child
});