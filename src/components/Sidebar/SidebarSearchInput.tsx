import { TextField } from "@mui/material";

export const SidebarSearchInput = () => (
    <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search"
        InputProps={{
            sx: {
                borderRadius: '9px',
                borderColor: '#e5e7eb',
                fontSize: '0.87rem',
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e5e7eb',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#cbd5e1', // Цвет border при наведении
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#9ca3af', // Цвет border при фокусе
                }
            },
        }}
    />
)