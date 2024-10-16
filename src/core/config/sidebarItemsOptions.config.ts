import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import { SidebarItemOption } from "../types/SidebarItemOption";

export const sidebarItemsOptions: SidebarItemOption[] = [
    { value: 'Dashboard', icon: DashboardIcon, label: 'Главная' },
    { value: 'Calendar', icon: CalendarMonthIcon, label: 'Календарь'},
    { value: 'Inbox', icon: InboxIcon, label: 'Входящие' },
    { value: 'Settings', icon: SettingsIcon, label: 'Настройки' },
]