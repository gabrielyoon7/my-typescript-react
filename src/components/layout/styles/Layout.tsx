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
import {useNavigate} from 'react-router-dom';
import {ReactNode, useState} from 'react';
import {AppBar, DrawerHeader, Main} from "./styles.ts";
import {drawerWidth} from "./styles.ts";
import {Route} from "../../../types/common.ts";

interface LayoutProps {
  title: string;
  routes: Route[],
  render: ReactNode
}

export default function Layout({title, routes, render}: LayoutProps) {
  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const findTitleByPath = (path: string) => {
    const context = path.split('/');
    const realPath = context[context.length - 1];
    return routes.find((child) => child.path === realPath)?.title;
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
            {title} : {findTitleByPath(location.pathname)}
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
          {routes.map((child, i) => (

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
          {render}
        </Box>
      </Main>
    </Box>
  );
}
