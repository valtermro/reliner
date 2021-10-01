import { Drawer as MuiDrawer, List, ListItem, makeStyles } from '@material-ui/core';
import { App } from './App';

interface StyleProps {
  width: number | string;
}

interface DrawerProps {
  apps: App[];
}

const useStyles = makeStyles({
  drawer: (props: StyleProps) => ({
    width: props.width,
  }),
  drawerPaper: (props: StyleProps) => ({
    width: props.width,
  }),
});

export default function Drawer(props: DrawerProps) {
  const classes = useStyles({ width: 200 });
  const { apps } = props;

  return (
    <MuiDrawer
      open={true}
      variant="persistent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        {apps.map(app => (
          <ListItem key={app.id}>
            {app.name}
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
}
