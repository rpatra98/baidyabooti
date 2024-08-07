'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../assets/baidyabooti-logo.png';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Button,
    Tooltip,
    Avatar,
    ThemeProvider,
    createTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import CrudOperationMenu from '../components/crudOperationMenu';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState();
    const [anchorElUser, setAnchorElUser] = useState();
    const [anchorElCrud, setAnchorElCrud] = useState();

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return null;

    const crud = [
        {label:'Create', link:'/create'},
        {label:'Update', link:'/update'},
        // {label:'Delete', link:'/delete'}
    ]
    const handleOpenCrudMenu = (event) => {
        setAnchorElCrud(event.currentTarget);
    }
    const handleCloseCrudMenu = () => {
        setAnchorElCrud(null);
    }

    const pages = [
        { label: 'Skin Care', link: '/skinCare' },
        { label: 'Hair Care', link: '/hairCare' },
        { label: 'Facial Kits', link: '/facialKits' },
        { label: 'Coconut Oil', link: '/coconutOil' },
        { label: 'Incen Sticks', link: '/incenSticks' },
        { label: 'Sanitizer', link: '/sanitizer' },
        { label: 'Ctm', link: '/ctm' }
    ];
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }
    const originalTheme = createTheme({
        palette: {
            primary: {
                // main: '#a1221d',
                main: '#c3e8bd'
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={originalTheme}>
                <AppBar position='static'>
                    <Container maxWidth='xl'>
                        <Toolbar disableGutters>
                            <Box sx={{ display:{xs:'none', md:'flex'}}}>
                            <Link href='/' style={{ textDecoration: 'none' }}>
                                <Image
                                    src={Logo}
                                    width={190}
                                    height={70}
                                    alt='Picture'
                                />
                            </Link>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit">
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((item, index) => (
                                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                                            <Typography
                                                variant='subtitle1'
                                                textAlign='center'
                                            >
                                                <Link href={item.link} style={{ textDecoration: 'none', color: '#375643' }}>
                                                    {item.label}
                                                </Link>
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <Typography
                                variant="h4"
                                noWrap
                                style={{ wordSpacing: '-0.08rem' }}
                                component='a'
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.08rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textUnderlineOffset: 'false'
                                }}
                            >
                                <Link href='/' style={{ textDecoration: 'none' }}>
                                    <Image
                                        src={Logo}
                                        width={190}
                                        height={70}
                                        alt='Picture'
                                    />
                                </Link>
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((item, index) => (
                                    <Link href={item.link} style={{ textDecoration: 'none' }}>
                                        <Button
                                            key={index}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 3, mx: 0.8, color: '#000000', display: 'block' }}
                                        >
                                            <Typography variant='subtitle1'>
                                            {item.label}
                                            </Typography>
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                            {/* <CrudOperationMenu/> */}
                                {/* <Button>
                                    Hello
                                </Button> */}
                            {/* <Box sx={{display:{xs:'none', md:'flex'}}}>
                                <CrudOperationMenu/>
                            </Box> */}
                            <Box sx={{ flexGrow: 0, marginRight:'2ch' }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenCrudMenu} sx={{ p: 0 }}>
                                        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                        <SettingsIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElCrud}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElCrud)}
                                    onClose={handleCloseCrudMenu}
                                >
                                    {crud.map((item, index) => (
                                        <MenuItem key={index} onClick={handleCloseCrudMenu}>
                                            <Link href={item.link} style={{ textDecoration: 'none' }}>
                                            <Typography textAlign="center" sx={{ color: '#000000' }}>{item.label}</Typography>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center" sx={{ color: '#000000' }}>{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Navbar;