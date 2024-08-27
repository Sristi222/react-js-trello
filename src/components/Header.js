import React from 'react';
import './Header.css';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className="title">
                    Trello Clone
                </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="account"
                >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
