import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type SidebarItemOption = { 
    value: string;
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">>
    label: string,
}