import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { InboxIcon } from "../../assets/icons/InboxIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { SidebarItemOption } from "../types/SidebarItemOption";

export const sidebarItemsOptions: SidebarItemOption[] = [
    { value: 'Dashboard', icon: DashboardIcon, label: 'Главная', iconSize: 14 },
    { value: 'Calendar', icon: CalendarMonthIcon, label: 'Календарь', iconSize: 14 },
    { value: 'Inbox', icon: InboxIcon, label: 'Входящие', iconSize: 15, color: '#777776' },
    { value: 'Settings', icon: SettingsIcon, label: 'Настройки', iconSize: 18, color: '#777776' },
]