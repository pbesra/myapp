import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { TextField } from '@mui/material';

const Demo = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleFocus = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (item) => {
        setTextValue(item);
        setAnchorEl(null);
    };
    const [textValue, setTextValue] = React.useState('');
    const handleChange = (event) => {
        setTextValue(event.target.value);
    }

    return (
        <div>
            <TextField
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onFocus={handleFocus}
                onChange={handleChange}
                value={textValue}



            />

            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => { handleClose('Profile') }}>Profile</MenuItem>
                <MenuItem onClick={() => { handleClose('My account') }}>My account</MenuItem>
                <MenuItem onClick={() => { handleClose('Logout') }}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default Demo;
