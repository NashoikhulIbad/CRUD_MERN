import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{backgroundColor:'#1e847f'}} position="sticky">
                <Toolbar>
                    <Typography>
                        <LocalLibraryOutlinedIcon />
                    </Typography>
                    <Tabs
                        sx={{ ml: "auto" }}
                        textColor="inherit"
                        indicatorColor="primary"
                        value={value}
                        onChange={(e, val) => setValue(val)}
                    >
                        <Tab LinkComponent={NavLink} to="/add" label='Tambah Buku' />
                        <Tab LinkComponent={NavLink} to="/books" label='Katalog Buku' />
                        <Tab LinkComponent={NavLink} to="/about" label='Tentang Kami' />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
