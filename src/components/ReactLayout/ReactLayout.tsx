import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {AppBar, DrawerHeader, Main} from "./ReactLayout.style.tsx";
import {drawerWidth} from "./drawerWidth.ts";
import {reactChildren} from "../../router/routes/children/reactChildren.tsx";

const findTitleByPath = (path: string) => reactChildren.find((child) => child.path === path)?.title;

export default function ReactLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{mr: 2, ...(open && {display: 'none'})}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            React with TS playground : {findTitleByPath(location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={() => navigate('/')}>
            <HomeIcon/>
          </IconButton>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
          {reactChildren.map((child, i) => (

            <ListItem
              key={`home-route-${i}`}
              disablePadding
              onClick={() => navigate(child.path)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <PlayCircleFilledWhiteIcon/>
                </ListItemIcon>
                <ListItemText primary={child.title}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
      </Drawer>
      <Main open={open}>
        <DrawerHeader/>
        <Box>
          <Outlet/>
        </Box>
      </Main>
    </Box>
  );
}