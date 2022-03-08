import * as React  from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
/* import Home from '../../Home'
import MyProgress from '../../ExpenseTracking' */

const Pages = ['Home', 'MyProgress']
const settings = ['Login', 'Register', 'Reset']

function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }


  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography 
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: {xs: 'none', md: "flex"}}}
                    >
                        Habit Tracker
                </Typography>
                <Box sx={{ flexGrow: 1,  display: {xs: "flex", md: 'none'} }} >
                    <IconButton
                        size='large'
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenUserMenu}
                        color="inherit" >
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
                            display: {xs: 'block', md: 'none'}

                        }} >
                            
                                <MenuItem >
                                    <Typography textAlign="center" variant="h6"><Link 
                            style={{ textDecoration: 'none', color: 'white' }}
                            to="/Home">Home</Link></Typography> 
                                </MenuItem>
                                <MenuItem >
                                <Link 
                            style={{ textDecoration: 'none', color: 'white' }}
                            to="/ExpenseTracking">My Progress</Link>
                                </MenuItem>
                        </Menu>
                </Box>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{ flexGrow: 1,  display: {xs: 'flex', md: 'none'} }}>
                        Habit Tracker
                    </Typography>
                <Box sx={{ flexGrow: 4, display: {xs: 'none', md: 'flex'} }} >
                    
                        <Button 
                         sx={{ my: 2, color: 'white', display: 'block'}}>
                            <Link 
                            style={{ textDecoration: 'none', color: 'white' }}
                            to="/Home">Home</Link>
                            
                        </Button>
                        <Button 
                         sx={{ my: 2, color: 'white', display: 'block'}}>
                            <Link 
                            style={{ textDecoration: 'none', color: 'white' }}
                            to="/ExpenseTracking">My Progress</Link>
                            
                        </Button>
                    
                </Box>
                <Box sx={{flexGrow: 0}}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src='' /> 
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px'}}
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
                            
                                <MenuItem  onClick={handleCloseUserMenu}>
                                    <Link 
                            style={{ textDecoration: 'none', color: 'white' }}
                            to="/Login">Login</Link>
                                </MenuItem>
                                <MenuItem  onClick={handleCloseUserMenu}>
                                    <Link 
                            style={{ textDecoration: 'none', color: 'white' }}
                            to="/Register">Register</Link>
                                </MenuItem>
                                <MenuItem  onClick={handleCloseUserMenu}>
                                    <Link 
                            style={{ textDecoration: 'none', color: 'white' }}
                            to="/Reset">Reset</Link>
                                </MenuItem>
                            
                        </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar