import HomeIcon from '@mui/icons-material/Home';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Route} from "../../types/common.ts";
import {ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import {DrawerHeader, drawerWidth} from "./Layout.style.ts";

interface LayoutProps {
  title: string;
  routes: Route[];
  render: ReactNode;
  color?: string;
  backgroundColor?: string;
}

export default function Layout({title, routes, render, color, backgroundColor}: LayoutProps) {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const findTitleByPath = (path: string) => {
    const context = path.split('/');
    const realPath = context[context.length - 1];
    return routes.find((child) => child.path === realPath)?.title;
  };

  const drawer = (
    <div>
      <DrawerHeader>
        <IconButton onClick={() => navigate('/')}>
          <HomeIcon/>
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
              <ListItemText primary={child.title}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        sx={{
          width: {md: `calc(100% - ${drawerWidth}px)`},
          ml: {md: `${drawerWidth}px`},
          backgroundColor: {backgroundColor}
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {md: 'none'}}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div" color={color}>
            {title} : {findTitleByPath(location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{width: {md: drawerWidth}, flexShrink: {md: 0}}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', md: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {xs: 'none', md: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{flexGrow: 1, p: 1, width: {md: `calc(100% - ${drawerWidth}px)`}}}
      >
        <Toolbar/>
        {render}
      </Box>
    </Box>
  );
}
